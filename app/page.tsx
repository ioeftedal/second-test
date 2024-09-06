"use client";

import React, { useState, useEffect } from "react";
import { Container, Center, Group, Pagination, Text } from "@mantine/core";

import { mainContainer, testContainer, footerProps, header } from "./styles";
import FarmOverview from "../components/FormPages/FarmOverview";
import FormScheduleVisit from "../components/FormPages/FarmDetails";
import FormManagementQuestionnaire from "../components/FormPages/ManagementQuestionnaire";
import AvoidanceDistanceTestingComponent from "../components/FormPages/AvoidanceDistanceTesting";
import QBehaviorAnalysis from "../components/FormPages/QualitativeBehaviourAnalysis";
import Header from "../components/Header/Header";

// Define the type for pageContent
type PageContent = {
  [key: number]: JSX.Element | string;
};

export default function Demo() {
  // Step 1: Maintain Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [hydrated, setHydrated] = useState(false);

  // Ensure the component is only rendered after hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Sample content for demonstration
  const pageContent: PageContent = {
    1: <FormScheduleVisit />,
    2: <FarmOverview />,
    3: <FormManagementQuestionnaire />,
    4: <AvoidanceDistanceTestingComponent />,
    5: <QBehaviorAnalysis />,
  };

  // Function to handle page changes
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Prevent initial render mismatch
  if (!hydrated) {
    return null;
  }

  return (
    <>
      <Header />
      <Container style={{ mainContainer }}>
        <Container style={footerProps}>
          <Center h={100}>
            <Pagination
              total={10}
              value={currentPage}
              boundaries={3}
              onChange={handlePageChange}
            >
              <Group gap={7} justify="center">
                <Pagination.First />
                <Pagination.Previous />
                <Pagination.Items />
                <Pagination.Next />
                <Pagination.Last />
              </Group>
            </Pagination>
          </Center>
        </Container>

        <Container style={{ testContainer }}>
          <div id={`page-${currentPage}`}>
            {/* Step 2: Render Content Conditionally */}
            {typeof pageContent[currentPage] === "string" ? (
              <Text>{pageContent[currentPage]}</Text>
            ) : (
              pageContent[currentPage]
            )}
          </div>
        </Container>
      </Container>
    </>
  );
}
