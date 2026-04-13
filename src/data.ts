export const resumeData = {
  name: "Samarendra Pitta",
  role: "Senior Software Engineer",
  contact: {
    phone: "+1 (669) 444-1146",
    email: "pitta.samarendra@gmail.com",
    linkedin: "https://linkedin.com/in/samarendra",
    github: "https://github.com/SamarendraPitta"
  },
  summary: "Senior Software Engineer with 5+ years of experience designing and scaling reliable services using Java, Spring Boot, Kafka, and AWS across ERP and high-traffic platforms. Strong background in building clean APIs, event-driven workflows, and cloud-native systems with a focus on performance, reliability, and fault tolerance.",
  experience: [
    {
      role: "Software Developer",
      company: "The GRA Group",
      location: "Cleveland, OH",
      period: "June 2025 - Present",
      highlights: [
        "Architected and owned backend services for a centralized incentive travel platform using Java Spring Boot and React.js, applying SOLID principles and design patterns.",
        "Designed and implemented a reusable, configuration-driven registration system, reducing code duplication and accelerating onboarding.",
        "Engineered concurrency-safe enrollment and capacity enforcement using atomic database transactions and idempotent REST APIs.",
        "Owned backend services end-to-end in production, including API design, data modeling, deployments, DNS and environment setup."
      ]
    },
    {
      role: "Graduate Assistant",
      company: "Cleveland State University",
      location: "Cleveland, OH",
      period: "Aug 2024 - May 2025",
      highlights: [
        "Mentored 60+ students in advanced programming and backend engineering, guiding them through scalable system design and clean architecture.",
        "Designed and implemented an end-to-end machine learning data pipeline using Python, spaCy, and LDA for topic modeling."
      ]
    },
    {
      role: "Software Engineer",
      company: "Infor",
      location: "Hyderabad, India",
      period: "Aug 2021 - Jun 2023",
      highlights: [
        "Developed and scaled core ERP services in Java and Spring Boot, optimizing database access patterns to reduce response latency by 30%.",
        "Designed and integrated REST and SOAP APIs to support inter-module communication across finance and supply-chain workflows.",
        "Improved code quality and release stability by implementing automated unit and integration tests using JUnit and Mockito.",
        "Worked with event-driven workflows using Kafka for asynchronous processing and better scalability."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Zettabyte Plus",
      location: "India",
      period: "Jun 2019 - Jul 2021",
      highlights: [
        "Built and scaled a full-stack eCommerce platform using React.js and Node.js, designing RESTful APIs backed by SQL.",
        "Optimized backend services in Node.js to automate invoice generation, reducing manual effort by approximately 60%.",
        "Diagnosed and resolved performance bottlenecks in product and order APIs, improving data retrieval latency by around 35%."
      ]
    }
  ],
  skills: {
    languages: ["Java", "Python", "C", "JavaScript", "SQL", "HTML", "CSS"],
    backend: ["Spring Boot", "Spring Security", "JPA", "Hibernate", "Node.js"],
    frontend: ["HTML", "CSS", "JS", "React", "TypeScript"],
    ai_ml: ["Python", "Flask", "Fast API", "ML Libraries", "LLM Integration", "RAG", "MCP"],
    distributed: ["Apache Kafka", "RabbitMQ", "Microservices", "REST API Design"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Cassandra"],
    cloud: ["AWS (ECS, Lambda, S3, API Gateway)", "Docker", "Kubernetes", "Linux", "Git"],
    testing: ["Prometheus", "Grafana", "JUnit", "Mockito", "TDD"]
  },
  blogs: [
    {
      title: "Diving into AI/ML to build Agents",
      date: "Recent",
      description: "Exploring the frontier of AI by learning new stacks including LLMs, RAG, LangChain, and Agents. Currently focused on building autonomous agents using the Model Context Protocol (MCP).",
      tags: ["AI", "LLM", "RAG", "LangChain", "Agents", "MCP"]
    }
  ],
  projects: [
    {
      title: "Distributed Data Store Replication System",
      description: "Built a UDP-based distributed key-value store in C using gossip-based replication, frame-level versioning, and mutex-protected thread-safe access across 4 peers.",
      tags: ["C", "UDP", "Distributed Systems", "Gossip Protocol"]
    },
    {
      title: "Medication Tracker",
      description: "Built a Spring Boot service for medication adherence tracking with PostgreSQL persistence, Redis caching, and AWS deployment.",
      tags: ["Spring Boot", "PostgreSQL", "Redis", "AWS"]
    },
    {
      title: "RPC-Based Distributed Computing Platform",
      description: "Built a fault-tolerant 5-node distributed computing platform in C using Sun RPC and round-robin scheduling, achieving dynamic load balancing.",
      tags: ["C", "RPC", "Distributed Computing", "Load Balancing"]
    }
  ],
  education: [
    {
      school: "Cleveland State University",
      degree: "Master of Science in Computer Science",
      period: "Aug 2023 - May 2025"
    },
    {
      school: "Sri Venkateswara University",
      degree: "Bachelor of Engineering in Computer Science",
      period: "Jul 2017 - Jul 2021"
    }
  ]
};
