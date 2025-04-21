import React from 'react';
import { Mail, User, Link } from 'lucide-react';

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Soufiane Oumbarek</h1>
        <h2 className="text-xl text-gray-600 mt-1">Software Engineer (Full Stack)</h2>
        
        <div className="flex flex-wrap gap-4 mt-3">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span>@soufiane</span>
          </div>
          <div className="flex items-center">
            <Link className="h-5 w-5 mr-2" />
            <span>@SoufianeOumbarek</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            <span>soufianeoump6@gmail.com</span>
          </div>
        </div>
      </header>
      
      {/* Summary Section */}
      <section className="mb-6">
        <p className="text-gray-700">
          Highly skilled Full Stack Developer with 3 years of experience in designing, developing, and deploying scalable web applications. 
          Proficient in both front-end and back-end technologies, including JavaScript (React, Node.js), Python, PHP, and databases (SQL, MongoDB), JAVA(Spring
          Boot, J2EE). Adept at building dynamic, user-friendly interfaces and robust server-side applications. Strong problem-solving skills with a passion for
          clean code, performance optimization, and best development practices. Experienced in Agile methodologies, CI/CD, and cloud technologies like AWS
          and Docker. Seeking to leverage expertise in full-stack development to contribute to innovative projects in a dynamic team environment.
        </p>
      </section>
      
      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">PROFESSIONAL EXPERIENCE</h2>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Software Engineering Intern - Full Stack</h3>
            <p className="text-gray-600">May 2023—Juin 2023</p>
          </div>
          <p className="font-medium">General Treasury of the Kingdom</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Architecture and System Design</li>
            <li>Development of an application for file transfer between employees and real-time chat (Node js, React js).</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Software Engineering Intern - Full Stack</h3>
            <p className="text-gray-600">May 2024—Juin 2024</p>
          </div>
          <p className="font-medium">EL KARAMA Private School BOUSSAID</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Architecture and System Design</li>
            <li>Development of an application for establishment scholar management (Laravel, React js)</li>
          </ul>
        </div>
      </section>
      
      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">EDUCATION</h2>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Master of Science DENSAD of UX / UI Design (Present)</h3>
            <p className="text-gray-600">September 2024</p>
          </div>
          <p className="font-medium">ENSAD Mohammédia - Maroc Hassan II University</p>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Bachelor of Science Software and Web Development</h3>
            <p className="text-gray-600">September 2023</p>
          </div>
          <p className="font-medium">Normal Superior School Tetouan - Abdelmalek Essaadi University</p>
        </div>
      </section>
      
      {/* Additional Skills */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">ADDITIONAL SKILLS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Tools:</h3>
            <p>Git, GitHub</p>
          </div>
          
          <div>
            <h3 className="font-semibold">Programming Languages:</h3>
            <p>Python, C++, JS, Java, C, PHP, C#</p>
          </div>
          
          <div>
            <h3 className="font-semibold">Frameworks & Libraries:</h3>
            <p>React js, Next Js, Laravel, Symfony, Spring Boot, J2EE, Django</p>
          </div>
          
          <div>
            <h3 className="font-semibold">Communication:</h3>
            <p>English (B2), Arabic (Native), Moroccan Darija (Native), Tamazight (Native), French (B2)</p>
          </div>
        </div>
      </section>
    </div>
  );
}