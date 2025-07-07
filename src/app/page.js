import Title from "@/components/homepage/Title";
import ProjectCard from "@/components/homepage/ProjectCard";
import { FaJava } from "react-icons/fa";
import {
  SiPython,
  SiPytorch,
  SiOpenai,
  SiNumpy,
  SiMatplotlib,
  SiApacheairflow,
  SiPandas,
  SiMicrosoftpowerbi,
  SiPostgresql,
  SiSpringboot,
  SiMaven,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiBioregistry,
  SiNodedotjs,
  SiOracle,
  SiTypescript,
  SiCss3,
  SiGit,
  SiFigma
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

function HomePage() {
  const RL_GameBot = [
    {
      name: "Python",
      icon: <SiPython color={"#090908"} />,
    },
    {
      name: "PyTorch",
      icon: <SiPytorch />
    },
    {
      name: "OpenAI Gym",
      icon: <SiOpenai />
    },
    {
      name: "NumPy",
      icon: <SiNumpy />
    },
    {
      name: "GIT",
      icon: <SiGit color={"black"} />,
    },
  ];
  const FinanceTracker = [
    { 
      name: "Java", 
      icon: <FaJava /> 
    },
    { 
      name: "Spring Boot", 
      icon: <SiSpringboot /> 
    },
    { 
      name: "PostgreSQL", 
      icon: <BiLogoPostgresql /> 
    },
    { 
      name: "React", 
      icon: <SiReact /> 
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss /> 
    },
    {
      name: "GIT",
      icon: <SiGit color={"black"} />,
    },
  ];
  const AuctionHouse = [
    {
      name: "JavaScript",
      icon: <SiJavascript color={"#007acc"} />,
    },
    {
      name: "React",
      icon: <SiReact color={"#0081A3"} />,
    },
    {
      name: "CSS",
      icon: <SiCss3 color={"#2464F0"} />,
    },
    {
      name: "PostgresSQL",
      icon: <BiLogoPostgresql color={"#326691"} />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs color={"#699F62"} />,
    },
    {
      name: "GIT",
      icon: <SiGit color={"black"} />,
    },
  ];
  const CustomerInsights = [
    { name: "Python", icon: <SiPython /> },
    { name: "Apache Airflow", icon: <SiGit /> },
    { name: "Pandas", icon: <SiNumpy /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "Power BI", icon: <SiReact /> },
    {
      name: "GIT",
      icon: <SiGit color={"black"} />,
    },
  ];
  return (
    <div className="flex flex-col items-center mx-auto min-h-screen max-w-[1280px] mt-28 px-5">
      <Title />
      <ProjectCard
        title="RL-GameBot"
        role="Reinforcement Learning"
        thumbnail="/images/RL-GameBot/0.png"
        description={
          "A Deep Q-Learning agent built with PyTorch and OpenAI Gym that learns to navigate a customizable 2D grid environment using experience replay and epsilon-greedy exploration. Integrated NumPy for data processing and Matplotlib for performance visualization."
        }
        technologies={RL_GameBot}
      />
      <ProjectCard
        title="Personal Finance Tracker"
        role="Full Stack"
        thumbnail="/images/FinanceTracker/0.png"
        description={
          "A secure finance web application featuring a Spring Boot backend with RESTful APIs and PostgreSQL persistence, and a React + Tailwind CSS frontend for tracking income, expenses, and budgets with role-based authentication."
        }
        technologies={FinanceTracker}
      />
      <ProjectCard
        title="Auction House Database"
        role="Full Stack"
        thumbnail="/images/AuctionHouse/0.png"
        description={
          "A full-stack auction management system built with TypeScript and React for the frontend, Node.js and Express for the backend, and Oracle SQL for robust relational data storage of auctions, bidders, and transactions."
        }
        technologies={AuctionHouse}
      />
      <ProjectCard
        title="Customer Insights ETL Pipeline"
        role="Data Engineer"
        thumbnail="/images/CustomerInsights/0.png"
        description={
          "A Python-based ETL pipeline orchestrated with Apache Airflow to extract and transform Shopify and Google Ads data, load into PostgreSQL, and generate business insights dashboards in Power BI. Utilized Pandas for data validation and cleaning across 100K+ daily records."
        }
        technologies={CustomerInsights}
      />
    </div>
  );
}

export default function Home() {
  return <HomePage />;
}
