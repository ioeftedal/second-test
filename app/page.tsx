"use client";

import React, { useState, useEffect } from "react";
import { Container, Center, Group, Pagination, Text } from "@mantine/core";

import { mainContainer, testContainer, footerProps } from "./styles";
import FarmOverview from "../components/FormPages/FarmOverview";
import FormScheduleVisit from "../components/FormPages/FarmDetails";
import FormManagementQuestionnaire from "../components/FormPages/ManagementQuestionnaire";
import AvoidanceDistanceTestingComponent from "../components/FormPages/AvoidanceDistanceTesting";
import QBehaviorAnalysis from "../components/FormPages/QualitativeBehaviourAnalysis";
import Header from "../components/Header/Header";
import { useForm, UseFormReturnType } from "@mantine/form";
import { defaultFarmOverviewData } from "../form/farmOverview";
import { defaultFarmDetails, FarmDetails } from "../form/farmDetails";
import { defaultManagmentQuestionnaireForm } from "../form/farmManagement";
import { defaultAvoidanceDistanceTestForm } from "../form/farmDistanceAvoidance";
import { defaultQBehaviorAnalysisForm } from "../form/farmBehaviourQuality";
import Footer from "../components/Footer/Footer";
import LyingTimeColission from "../components/FormPages/LyingTimeAndCollision";
import defaultLyingTimeAndCollisionForm from "../form/lyingTimeAndColission";
import Resources from "../components/FormPages/FarmResources";
import { defaultFarmResources } from "../form/farmResources";
import ClinicalScoringInfo from "../components/FormPages/ClinicalScoring";
import { defaultClinicalScoring } from "../form/farmClinicalScoring";
import OverallScoreInfo from "../components/FormPages/OverallScore";
import { defaultOverallScore } from "../form/farmOverallScores";

// Define the type for pageContent
type PageContent = {
  [key: number]: JSX.Element | string;
};

export default function Demo() {
  const farmOverviewForm = useForm({
    initialValues: defaultFarmOverviewData(),
  });
  const farmDetailsForm: UseFormReturnType<FarmDetails> = useForm({
    initialValues: defaultFarmDetails(),
  });
  const managmentQuestionnaireForm = useForm({
    initialValues: defaultManagmentQuestionnaireForm(),
  });
  const avoidanceDistanceTestingForm = useForm({
    initialValues: defaultAvoidanceDistanceTestForm(),
  });
  const behaviorAnalysisForm = useForm({
    initialValues: defaultQBehaviorAnalysisForm(),
  });
  const lyingTimeCollisionForm = useForm({
    initialValues: defaultLyingTimeAndCollisionForm(6),
  });
  const farmResources = useForm({
    initialValues: defaultFarmResources(),
  });
  const farmClinicalScoringForm = useForm({
    initialValues: defaultClinicalScoring(),
  });
  // const socialBehaviorForm = useForm({
  //   initialValues: defaultSocialBehaviourAndCoughingForm(),
  // });
  const farmOverallScore = useForm({
    initialValues: defaultOverallScore(),
  });

  // Step 1: Maintain Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [hydrated, setHydrated] = useState(false);

  // Ensure the component is only rendered after hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Sample content for demonstration
  const pageContent: PageContent = {
    1: <FormScheduleVisit form={farmDetailsForm} />,
    2: <FarmOverview form={farmOverviewForm} />,
    3: <FormManagementQuestionnaire form={managmentQuestionnaireForm} />,
    4: (
      <AvoidanceDistanceTestingComponent form={avoidanceDistanceTestingForm} />
    ),
    5: <QBehaviorAnalysis form={behaviorAnalysisForm} />,
    6: <LyingTimeColission form={lyingTimeCollisionForm} />,
    7: <></>,
    8: <Resources form={farmResources} />,
    9: <ClinicalScoringInfo form={farmClinicalScoringForm} />,
    10: <OverallScoreInfo form={farmOverallScore} />,
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
    <div style={{ minHeight: "100vh" }}>
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
      <Footer />
    </div>
  );
}
