import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ListItem } from '@rneui/themed';
import { styles } from './styles';

interface SeekHelpProps {
  org_name: string;
  summary: string;
  address: string;
  phone_number: string;
  hotline_number: string;
  office_hours: string;
  tags: string;
}

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
          <View style={styles.headerContent}>
            <Text style={styles.orgName}>{org_name}</Text>
            {!expanded && (
              <Text style={styles.summaryPreview}>
                {summary.slice(0, 60)}...
              </Text>
            )}
          </View>
        }
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}
        containerStyle={{ padding: 0 }}
      >
        {expanded && (
          <View style={styles.expandedContent}>
            <Text style={styles.summary}>{summary}</Text>

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
        )}
      </ListItem.Accordion>
    </View>
  );
}
