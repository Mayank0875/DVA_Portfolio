const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Hotel Booking Analytics",
    description: "Interactive analytics dashboard built to examine hotel booking demand, cancellation behavior, customer segments, seasonal trends, and revenue performance. Features booking patterns, lead time analysis, market segment insights, guest behavior tracking, and occupancy-focused decision support.",
    image: `${base}Hotel_booking.jpeg`,
    tags: ["Python", "Jupyter", "Machine Learning", "Tableau"],
    github: "https://github.com/MAYANKSHARMA01010/SECTIONA_G5_SmartStay_Analytics",
  },
  {
    name: "AI Study Coach",
    description: "End-to-end student performance prediction system using machine learning. Includes Jupyter notebooks for data preprocessing, exploratory analysis, feature engineering, and model training with multiple algorithms (Logistic Regression, Decision Tree, Random Forest, XGBoost). Features a Streamlit-based interactive UI for real-time predictions, model comparison, and performance evaluation with metrics, visualizations, and actionable insights.",
    image: `${base}student_dashboard.png`,
    tags: ["Python", "GenAI", "FastAPI", "LLaMA", "Streamlit", "Scikit-learn"],
    github: "https://github.com/Rana-NST-RU/deploy-student_pass-fail_predicting_ml_model",
  },
  {
    name: "NST Buddy Tech",
    description: "Interactive student-focused digital platform built to streamline academic collaboration, resource sharing, and campus communication. Features structured content management, user-friendly navigation, real-time updates, and scalable data handling to improve student engagement and accessibility.",
    image: `${base}nst_buddy_tech.png`,
    tags: ["React", "Node.js", "PostgreSQL", "Excel", "Python", "Jupyter"],
    github: "https://github.com/Rana-NST-RU/NST-Buddy-Tech",
  },
    {
    name: "Axiom LMS",
    description: "A full-stack University Learning Management System (LMS) designed to support multi-tenant architecture where each university manages its own programs, semesters, courses, and users. Features include role-based access (Admin, Faculty, Student), course and semester mapping, assignment and quiz systems, authentication with JWT, and a clean modular backend using OOP, SOLID principles, and design patterns. Built for scalability and real-world academic workflows.",
    image: `${base}hi.jpg`,
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Express", "System Design"],
    github: "https://github.com/Mayank0875/Axiom",
  }
]

export default projects
