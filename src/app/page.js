import Title from "@/components/homepage/Title";
import ProjectCard from "@/components/homepage/ProjectCard";
import { Analytics } from "@vercel/analytics/next";
import { FaJava, FaAmazon } from "react-icons/fa";
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
  SiNodedotjs,
  SiOracle,
  SiTypescript,
  SiCss3,
  SiGit,
  SiFigma,
  SiDocker,
  SiGraphql,
  SiFirebase,
  SiStripe,
  SiFastapi,
  SiAmazonecs,
  SiRedis,
  SiApachekafka,
  SiMongodb
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
  const ComplianceDashboard = [
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Kafka", icon: <SiApachekafka /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "React", icon: <SiReact /> },
    { name: "AWS ECS", icon: <SiAmazonecs /> },
    { name: "Docker", icon: <SiDocker /> },
  ];
  const AIWorkflowAssistant = [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "OpenAI API", icon: <SiOpenai /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
    { name: "React", icon: <SiReact /> },
    { name: "Docker", icon: <SiDocker /> },
  ];
  const MicroBankingApp = [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "React", icon: <SiReact /> },
    { name: "Firebase Auth", icon: <SiFirebase /> },
    { name: "Docker", icon: <SiDocker /> },
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
        title="Real-Time Compliance Dashboard"
        role="DevOps / Backend"
        thumbnail="/images/ComplianceDashboard/0.png"
        description="Engineered a real-time policy violation monitoring system using Kafka, FastAPI, and PostgreSQL, deployed on AWS ECS Fargate with React dashboards and CloudWatch observability capable of ingesting and analyzing 100K+ logs daily."
        technologies={ComplianceDashboard}
      />
      <ProjectCard
        title="AI Workflow Assistant"
        role="AI Engineering"
        thumbnail="/images/AIWorkflowAssistant/0.png"
        description="Designed a modular agent chaining system for bug triage, code review, and doc generation with OpenAI API and Redis queues, visualized via a React dashboard and deployed with PostgreSQL and Docker microservices."
        technologies={AIWorkflowAssistant}
      />
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
        title="Community Micro-Banking App"
        role="Full Stack"
        thumbnail="/images/FinanceTracker/0.png"
        description={
          "Built a secure, contribution-based group savings platform with Node.js, GraphQL, and MongoDB, integrating Firebase Auth and Dockerized deployment to support multi-user workflows and 200+ transaction simulations."
        }
        technologies={MicroBankingApp}
      />
      <ProjectCard
        title="Auction House Database"
        role="Full Stack"
        thumbnail="/images/AuctionHouse/0.png"
        description={
          "A full-stack auction management system built with TypeScript and React for the frontend, Node.js and Express for the backend, and PostgresSQL for robust relational data storage of auctions, bidders, and transactions."
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
