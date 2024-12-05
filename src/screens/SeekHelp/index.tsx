import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Check from 'src/assets/images/check_small.svg';
import ResourceT from '@/components/Resource/Resource';
import { getSeekHelpData } from '@/supabase/queries/generalQueries';
import { Resource as ResourceType } from '@/types/types';
import { styles } from './styles';

const jurisdiction = ['California', 'National'];

export default function ResourceList() {
  const filters = [
    'General Resources',
    'Health Organizations',
    'LGBT Organizations',
    'Legal Services',
    'Government Resources',
  ];

  const tagMapping: Record<string, string[]> = {
    'General Resources': ['General'],
    'Health Organizations': ['Health'],
    'LGBT Organizations': ['LGBT'],
    'Legal Services': ['Legal'],
    'Government Resources': ['Government'],
  };

  const [resources, setResources] = useState<ResourceType[]>([]);
  const [filteredResources, setFilteredResources] = useState<ResourceType[]>(
    [],
  );
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string[]>(
    [],
  );

  const toggleSelection = (level: string) => {
    setSelectedJurisdiction(prevSelected => {
      // check if the level is already selected
      if (prevSelected.includes(level)) {
        return prevSelected.filter(item => item !== level);
      } else {
        return [...prevSelected, level];
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getSeekHelpData();
      setResources(data);
      setFilteredResources(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const applyFilter = (filter: string) => {
    setSelectedFilter(filter);
    const tags = tagMapping[filter as keyof typeof tagMapping];
    // iterates through resources to check if the tags are equal to the filter
    const filtered = resources.filter(resource =>
      resource.tags.split(',').some((tag: string) => tags.includes(tag.trim())),
    );
    setFilteredResources(filtered);
  };

  const applyJurisdictionFilter = () => {
    let filtered = resources;

    if (selectedJurisdiction.length > 0) {
      filtered = filtered.filter(resource => {
        // check if resource state matches any selected jurisdiction
        return selectedJurisdiction.includes(resource.state);
      });
    }

    if (selectedFilter) {
      const tags = tagMapping[selectedFilter as keyof typeof tagMapping];
      filtered = filtered.filter(resource =>
        resource.tags
          .split(',')
          .some((tag: string) => tags.includes(tag.trim())),
      );
    }

    setFilteredResources(filtered);
  };

  useEffect(() => {
    applyJurisdictionFilter();
  }, [selectedJurisdiction, selectedFilter, resources]);

  return (
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        <View style={styles.selectContainer}>
          <Text style={styles.selectText}>Select Resources Level</Text>
          <View style={styles.selectJurisdictionContainer}>
            {jurisdiction.map(level => (
              <View key={level} style={styles.checkButtonContainer}>
                <TouchableOpacity
                  style={[
                    styles.checkButton,
                    selectedJurisdiction.includes(level)
                      ? styles.selectedCheckButton
                      : null,
                  ]}
                  onPress={() => toggleSelection(level)}
                >
                  {selectedJurisdiction.includes(level) && <Check />}
                </TouchableOpacity>
                <Text style={styles.buttonText}>{level}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.selectContainer}>
          <Text style={styles.selectText}>Select Resources Type</Text>

          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={
                selectedFilter === filter
                  ? styles.selectedFilterButton
                  : styles.filterButton
              }
              onPress={() => applyFilter(filter)}
            >
              <Text
                style={
                  selectedFilter === filter
                    ? styles.selectedButtonText
                    : styles.buttonText
                }
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView style={styles.rightPanel}>
        <View style={styles.resourcesContainer}>
          {filteredResources.length > 0 ? (
            filteredResources
              .sort(function (a, b) {
                return a.org_name.localeCompare(b.org_name);
              })
              .map((resource, index) => (
                <ResourceT
                  key={index}
                  org_name={resource.org_name}
                  summary={resource.summary}
                  address={resource.address}
                  phone_number={resource.phone_number}
                  office_hours={resource.office_hours}
                  tags={resource.tags}
                  hotline_number={resource.hotline_number}
                />
              ))
          ) : (
            <Text style={styles.buttonText}>No resources found</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
