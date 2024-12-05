import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from '@rneui/themed';
import { SeekHelpProps } from '@/types/types';
import { styles } from './styles';

export default function ResourceT({
  org_name,
  summary,
  address,
  phone_number,
  office_hours,
}: SeekHelpProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.resourceCard}>
      <ListItem.Accordion
        content={
          <TouchableOpacity
            style={styles.headerContent}
            onPress={() => setExpanded(!expanded)}
          >
            <Text style={styles.orgName}>{org_name}</Text>
            {!expanded && (
              <Text style={styles.summaryPreview}>
                {summary.slice(0, 80)}...
              </Text>
            )}
          </TouchableOpacity>
        }
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)} // Handles toggling when header is pressed
        containerStyle={{ padding: 0 }}
      >
        {expanded && (
          <TouchableOpacity
            style={styles.expandedContent}
            onPress={() => setExpanded(false)} // Collapses content when expanded section is pressed
          >
            <Text style={styles.summary}>{summary}</Text>

            <View style={styles.fieldsContainer}>
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Address:</Text>
                <Text style={styles.info}>{address}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.label}>Office:</Text>
                <Text style={styles.info}>{phone_number}</Text>
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.label}>Office Hours:</Text>
                <Text style={styles.info}>{office_hours}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </ListItem.Accordion>
    </View>
  );
}
