"use client";

import JobItem from '@/components/jobItem';
import { saveJob } from '@/actions';
import { useState } from 'react';
import Link from "next/link";

export default function Home() {

  const [jobList, setJobList] = useState([{
    id: 1,
    name: "Mentor/Instructor - Opportunities For All",
    date: 2024,
    description: "Led computer science cohort at San Francisco State University, teaching Python coding and algorithm design to high school students"
  }, {
    id: 2,
    name: "Outside Service - Moraga Country Club",
    date: 2022,
    description: "Assisted members with golf reservations and equipment rentals, ensuring a positive customer service experience"
  }, {
    id: 3,
    name: "Independent Tutor",
    date: 2025,
    description: "Tutored high-school students in math and science courses, primarily calculus and physics"
  }]);

 // const jobList = await prisma.job.findMany();

  let jobHtml = jobList.map((job) => <JobItem job={job} key={job.id}></JobItem>);

  // function addJob(formData) {
  //   const newJobList = [...jobList, {
  //     id: Math.random(),
  //     name: formData.get('name'),
  //     description: formData.get('description'),
  //     date: formData.get('date')
  //   }];
  //   setJobList(newJobList);
  // }

  return (
    <div>
      <label>Name: Dylan Gururajan</label>
      <br/>
      <label>Phone Number: (312) 659-2511</label>
      <br/>
      <label>Email: dylangururajan22@gmail.com</label>
      <br/>
      <br/>
      <label>Projects:</label>
      <br/>
      <label>RankMySandwich - Web Application</label>
      <br/>
      <label> -- worked with team to develop social media website application with</label>
      <br/>
      <label> -- the purpose of helping users find reputable sandwich recipes and shops near them</label>
      <br/>
      <br/>
      <label>Client Server Connection</label>
      <br/>
      <label> -- developed a client-server connection via Cal Poly's Unix servers, in C </label>
      <br/>
      <br/>
      <label>Skills:</label>
      <br/>
      <label>Coding Languages: C, Java, Python, Assembly</label>
      <br/>
      <label>Citical Thinking</label>
      <br/>
      <label>Public Speaking</label>
      <br/>
      <label>Project Management</label>
      <br/>
      <br/>
      Job List:
      {jobList.map((job) => (
      <div key={job.id}>
        <Link href={`/job/${job.id}`}>
            {job.name}
          </Link>{" "}
        - <em>{job.date}</em>
        {job.description && <>: <br/>{job.description}</>}
        <br/>
      </div>
    ))}
      <br/>
      <form action={saveJob}>
        <label>Name</label>
        <input type="text" name="name"/>
        <br/>
        <label>Description</label>
        <input type="text" name="description"/>
        <br/>
        <label>Date</label>
        <input type="text" name="date"/>
        <input type="submit" name="Submit"/>
      </form>
      
    </div>
  );
}