import React from "react";
import Header from "../components/Header";
import SectionCategory from "../components/SectionCategory";
import SectionDownload from "../components/SectionDownload";
import SectionFooter from "../components/SectionFooter";
import SectionJobs from "../components/SectionJobs";
import SectionService from "../components/SectionService";
import SectionStaff from "../components/SectionStaff";
import SubscribeSection from "../components/SubscribeSection";

function New() {
  return (
    <div>
      <Header />
      <SectionCategory />
      <SectionJobs />
      <SectionService />
      <SectionDownload />
      <SectionStaff />
      <SubscribeSection />
      <SectionFooter />
    </div>
  );
}

export default New;
