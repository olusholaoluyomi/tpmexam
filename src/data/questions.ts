// Auto-generated from questions CSV
export interface QuestionOption { key: string; label: string }
export interface Question { id: number; question: string; options: QuestionOption[]; correct: string; points: number }

export const questions: Question[] = [
  {
    "id": 1,
    "question": "A Product Manager primarily focuses on the _________, while a Project Manager focuses on the _________.",
    "options": [
      {
        "key": "A",
        "label": "How/When; Why/What"
      },
      {
        "key": "B",
        "label": "Why/What; How/When"
      },
      {
        "key": "C",
        "label": "Code/Design; Budget/Schedule"
      },
      {
        "key": "D",
        "label": "Sales/Marketing; Strategy/Vision"
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 2,
    "question": "Which of the following is NOT one of the \"Three Pillars\" of Product Management?",
    "options": [
      {
        "key": "A",
        "label": "User Experience (UX)"
      },
      {
        "key": "B",
        "label": "Business"
      },
      {
        "key": "C",
        "label": "Technology"
      },
      {
        "key": "D",
        "label": "Human Resources"
      }
    ],
    "correct": "D",
    "points": 1
  },
  {
    "id": 3,
    "question": "True or False: In modern product management, success is measured by the number of features shipped (Outputs).",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 4,
    "question": "According to the \"Myth of Execution,\" a team has failed if:",
    "options": [
      {
        "key": "A",
        "label": "They ship the feature late."
      },
      {
        "key": "B",
        "label": "The code is not well-documented."
      },
      {
        "key": "C",
        "label": "They ship perfectly working code that no one uses."
      },
      {
        "key": "D",
        "label": "They exceed the original budget."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 5,
    "question": "What is the \"Holy Grail\" of Product-Market Fit (PMF)?",
    "options": [
      {
        "key": "A",
        "label": "Having 1 million registered users."
      },
      {
        "key": "B",
        "label": "Raising a Series A funding round."
      },
      {
        "key": "C",
        "label": "When 40%+ of users say they would be \"very disappointed\" without the product."
      },
      {
        "key": "D",
        "label": "When the app is featured on the App Store."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 6,
    "question": "The \"5 Whys\" technique is primarily used to:",
    "options": [
      {
        "key": "A",
        "label": "Interview 5 different users."
      },
      {
        "key": "B",
        "label": "Justify why a feature should be built to the CEO."
      },
      {
        "key": "C",
        "label": "Drill down from a surface symptom to a root cause."
      },
      {
        "key": "D",
        "label": "Estimate the time required for a sprint."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 7,
    "question": "In the Problem Statement formula, \"[User] struggles to [Action] because [Root Cause],\", the Root Cause explains:",
    "options": [
      {
        "key": "A",
        "label": "The feature to be built."
      },
      {
        "key": "B",
        "label": "Why the user is currently blocked."
      },
      {
        "key": "C",
        "label": "The cost of the problem."
      },
      {
        "key": "D",
        "label": "The competitor's weakness."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 8,
    "question": "True or False: During a Discovery Interview, the PM should spend at least 70% of the time talking to explain the vision.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 9,
    "question": "A \"User Persona\" is most effective when it is:",
    "options": [
      {
        "key": "A",
        "label": "Based on broad demographic stereotypes (e.g., \"Millennials\")."
      },
      {
        "key": "B",
        "label": "A fictional character invented by the marketing team."
      },
      {
        "key": "C",
        "label": "A living representation built from real interview data."
      },
      {
        "key": "D",
        "label": "A one-time document that is never updated."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 10,
    "question": "The \"Walking Skeleton\" in a story map represents:",
    "options": [
      {
        "key": "A",
        "label": "A feature that has been deprecated."
      },
      {
        "key": "B",
        "label": "The minimum sequence of steps to complete an activity end-to-end."
      },
      {
        "key": "C",
        "label": "The most expensive part of the product."
      },
      {
        "key": "D",
        "label": "The visual design system (UI kit)."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 11,
    "question": "What percentage of product failures is attributed to bad requirements?",
    "options": [
      {
        "key": "A",
        "label": "10%"
      },
      {
        "key": "B",
        "label": "25%"
      },
      {
        "key": "C",
        "label": "40%"
      },
      {
        "key": "D",
        "label": "80%"
      }
    ],
    "correct": "D",
    "points": 1
  },
  {
    "id": 12,
    "question": "Which section of a PRD is designed to prevent \"Scope Creep\"?",
    "options": [
      {
        "key": "A",
        "label": "Goals & Success Metrics"
      },
      {
        "key": "B",
        "label": "User Stories"
      },
      {
        "key": "C",
        "label": "Scope: In / Out"
      },
      {
        "key": "D",
        "label": "Open Questions"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 13,
    "question": "In the User Story format \"As a [user], I want to [action] so that [benefit],\", the \"so that\" clause defines the:",
    "options": [
      {
        "key": "A",
        "label": "Technical requirement."
      },
      {
        "key": "B",
        "label": "Acceptance criteria."
      },
      {
        "key": "C",
        "label": "Intended outcome/value."
      },
      {
        "key": "D",
        "label": "Priority level."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 14,
    "question": "INVEST is an acronym for high-quality user stories. What does the \"S\" stand for?",
    "options": [
      {
        "key": "A",
        "label": "Specific"
      },
      {
        "key": "B",
        "label": "Strategic"
      },
      {
        "key": "C",
        "label": "Small"
      },
      {
        "key": "D",
        "label": "Shared"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 15,
    "question": "Acceptance Criteria (AC) should be:",
    "options": [
      {
        "key": "A",
        "label": "Vague to allow for developer creativity."
      },
      {
        "key": "B",
        "label": "Testable and binary (pass/fail)."
      },
      {
        "key": "C",
        "label": "Written in technical code."
      },
      {
        "key": "D",
        "label": "Only written after the code is deployed."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 16,
    "question": "The \"Given/When/Then\" format is also known as:",
    "options": [
      {
        "key": "A",
        "label": "Rule-oriented AC."
      },
      {
        "key": "B",
        "label": "Scenario-based AC."
      },
      {
        "key": "C",
        "label": "Waterfall documentation."
      },
      {
        "key": "D",
        "label": "User Story mapping."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 17,
    "question": "In the RICE prioritization model, \"Reach\" is typically measured by:",
    "options": [
      {
        "key": "A",
        "label": "How much revenue it brings."
      },
      {
        "key": "B",
        "label": "How difficult it is to build."
      },
      {
        "key": "C",
        "label": "The number of users affected in a specific timeframe."
      },
      {
        "key": "D",
        "label": "How much the CEO likes the idea."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 18,
    "question": "A \"Spike\" is a task intended for:",
    "options": [
      {
        "key": "A",
        "label": "Fixing a P0 bug."
      },
      {
        "key": "B",
        "label": "Research or technical exploration to reduce uncertainty."
      },
      {
        "key": "C",
        "label": "Building the final UI of a product."
      },
      {
        "key": "D",
        "label": "Pitching to investors."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 19,
    "question": "Who owns the Product Backlog in a Scrum team?",
    "options": [
      {
        "key": "A",
        "label": "The Scrum Master"
      },
      {
        "key": "B",
        "label": "The Product Owner (PM)"
      },
      {
        "key": "C",
        "label": "The Engineering Lead"
      },
      {
        "key": "D",
        "label": "The CEO"
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 20,
    "question": "True or False: The \"Definition of Done\" should be shared and written down by the entire team.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 21,
    "question": "Which HTTP status code signifies that a resource was successfully \"Created\"?",
    "options": [
      {
        "key": "A",
        "label": "200 OK"
      },
      {
        "key": "B",
        "label": "201 Created"
      },
      {
        "key": "C",
        "label": "404 Not Found"
      },
      {
        "key": "D",
        "label": "500 Server Error"
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 22,
    "question": "The \"4 Golden Signals\" of system health include Latency, Traffic, Errors, and:",
    "options": [
      {
        "key": "A",
        "label": "Saturation"
      },
      {
        "key": "B",
        "label": "Subscriptions"
      },
      {
        "key": "C",
        "label": "Sentiment"
      },
      {
        "key": "D",
        "label": "Security"
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 23,
    "question": "p99 Latency refers to:",
    "options": [
      {
        "key": "A",
        "label": "The average speed of all users."
      },
      {
        "key": "B",
        "label": "The speed experienced by the fastest 1% of users."
      },
      {
        "key": "C",
        "label": "The slowest 1% of requests, often impacting power users."
      },
      {
        "key": "D",
        "label": "The speed of the system when it is 99% saturated."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 24,
    "question": "Continuous Delivery (CD) differs from Continuous Deployment because:",
    "options": [
      {
        "key": "A",
        "label": "Delivery is automated; Deployment is manual."
      },
      {
        "key": "B",
        "label": "Delivery requires a human to \"push the button\"; Deployment is fully automated."
      },
      {
        "key": "C",
        "label": "Delivery is for mobile apps; Deployment is for web."
      },
      {
        "key": "D",
        "label": "There is no difference."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 25,
    "question": "True or False: It is safe and recommended to demo new features to stakeholders from a \"Development\" environment.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 26,
    "question": "What is the primary purpose of a \"Feature Flag\"?",
    "options": [
      {
        "key": "A",
        "label": "To track user marketing channels."
      },
      {
        "key": "B",
        "label": "To toggle features on/off in production without new code deployments."
      },
      {
        "key": "C",
        "label": "To flag bugs in Jira."
      },
      {
        "key": "D",
        "label": "To signal that a sprint is finished."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 27,
    "question": "A Post-Incident Review (PIR) should be conducted:",
    "options": [
      {
        "key": "A",
        "label": "Within 48–72 hours of resolving a critical incident."
      },
      {
        "key": "B",
        "label": "Only if the customer asks for one."
      },
      {
        "key": "C",
        "label": "Once a month as a general meeting."
      },
      {
        "key": "D",
        "label": "Before the feature is even built."
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 28,
    "question": "In the \"Testing Pyramid,\" which layer should have the largest number of tests?",
    "options": [
      {
        "key": "A",
        "label": "UAT"
      },
      {
        "key": "B",
        "label": "Integration Tests"
      },
      {
        "key": "C",
        "label": "Unit Tests"
      },
      {
        "key": "D",
        "label": "UI/Manual Tests"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 29,
    "question": "Equivalence Partitioning is a QA technique used to:",
    "options": [
      {
        "key": "A",
        "label": "Test one representative from a group of identical inputs."
      },
      {
        "key": "B",
        "label": "Give all developers equal tasks."
      },
      {
        "key": "C",
        "label": "Divide the budget equally between features."
      },
      {
        "key": "D",
        "label": "Partition the database into three sections."
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 30,
    "question": "UAT (User Acceptance Testing) is primarily focused on:",
    "options": [
      {
        "key": "A",
        "label": "Finding syntax errors in code."
      },
      {
        "key": "B",
        "label": "Testing API response times."
      },
      {
        "key": "C",
        "label": "Ensuring the product meets business requirements and user needs."
      },
      {
        "key": "D",
        "label": "Stress testing the server."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 31,
    "question": "The AARRR funnel stands for Acquisition, Activation, Retention, Referral, and:",
    "options": [
      {
        "key": "A",
        "label": "Resale"
      },
      {
        "key": "B",
        "label": "Reach"
      },
      {
        "key": "C",
        "label": "Revenue"
      },
      {
        "key": "D",
        "label": "Redesign"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 32,
    "question": "A \"Vanity Metric\" is a number that:",
    "options": [
      {
        "key": "A",
        "label": "Drives strategic product decisions."
      },
      {
        "key": "B",
        "label": "Looks impressive but lacks actionable insight (e.g., total registered users)."
      },
      {
        "key": "C",
        "label": "Measures the true North Star."
      },
      {
        "key": "D",
        "label": "Is only used by designers."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 33,
    "question": "The \"North Star Metric\" should ideally measure:",
    "options": [
      {
        "key": "A",
        "label": "Core user value (e.g., \"Messages Sent\" for Slack)."
      },
      {
        "key": "B",
        "label": "Total number of app downloads."
      },
      {
        "key": "C",
        "label": "Monthly revenue."
      },
      {
        "key": "D",
        "label": "Number of employees."
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 34,
    "question": "True or False: Correlation always implies Causation in product analytics.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 35,
    "question": "In A/B testing, \"P-Hacking\" refers to the mistake of:",
    "options": [
      {
        "key": "A",
        "label": "Hacking the competitor's app."
      },
      {
        "key": "B",
        "label": "Checking results daily and stopping the test early because the graph looks good."
      },
      {
        "key": "C",
        "label": "Using too many \"P\" variables in SQL."
      },
      {
        "key": "D",
        "label": "Encrypting data."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 36,
    "question": "Minimum Detectable Effect (MDE) is:",
    "options": [
      {
        "key": "A",
        "label": "The smallest bug a QA can find."
      },
      {
        "key": "B",
        "label": "The least amount of effort a dev can put into a ticket."
      },
      {
        "key": "C",
        "label": "The smallest improvement an experiment can reliably detect."
      },
      {
        "key": "D",
        "label": "The minimum number of users needed for a survey."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 37,
    "question": "\"Vibe Coding\" is a new PM workflow where:",
    "options": [
      {
        "key": "A",
        "label": "PMs listen to music while writing PRDs."
      },
      {
        "key": "B",
        "label": "PMs describe intent in plain language and AI writes the functional code."
      },
      {
        "key": "C",
        "label": "PMs only work on \"vibe-related\" social features."
      },
      {
        "key": "D",
        "label": "Developers use AI to write unit tests only."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 38,
    "question": "Retrieval-Augmented Generation (RAG) is used to:",
    "options": [
      {
        "key": "A",
        "label": "Generate random user personas."
      },
      {
        "key": "B",
        "label": "Give AI access to internal company documents to provide grounded answers."
      },
      {
        "key": "C",
        "label": "Automatically delete old Slack messages."
      },
      {
        "key": "D",
        "label": "Speed up the deployment pipeline."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 39,
    "question": "The Model Context Protocol (MCP) is best described as:",
    "options": [
      {
        "key": "A",
        "label": "A new legal framework for AI."
      },
      {
        "key": "B",
        "label": "A standard that allows AI models to connect to various data sources/tools."
      },
      {
        "key": "C",
        "label": "A protocol for human-to-human communication."
      },
      {
        "key": "D",
        "label": "An encrypted database."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 40,
    "question": "The GRADE framework for agentic prompting stands for Goal, Role, Actions, Data, and:",
    "options": [
      {
        "key": "A",
        "label": "Effort"
      },
      {
        "key": "B",
        "label": "Engineering"
      },
      {
        "key": "C",
        "label": "Expected Output"
      },
      {
        "key": "D",
        "label": "Evidence"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 41,
    "question": "Scenario: Your funnel shows a 70% drop-off at the \"Link Bank\" step. As a PM, what is your #1 priority?",
    "options": [
      {
        "key": "A",
        "label": "Increase Instagram ad spend to get more users."
      },
      {
        "key": "B",
        "label": "Fix the onboarding friction at the bank link step."
      },
      {
        "key": "C",
        "label": "Build a new \"Social Feed\" feature."
      },
      {
        "key": "D",
        "label": "Change the app's logo."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 42,
    "question": "Scenario: A CEO demands a feature mid-sprint that isn't on the roadmap. What is the best \"AI-Ready PM\" response?",
    "options": [
      {
        "key": "A",
        "label": "\"Yes, we will start it immediately.\""
      },
      {
        "key": "B",
        "label": "\"No, the roadmap is frozen.\""
      },
      {
        "key": "C",
        "label": "\"I understand the goal. Let's look at the data and see what we would have to trade off to build this.\""
      },
      {
        "key": "D",
        "label": "Ignore the message."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 43,
    "question": "Scenario: You are building a prototype in Bolt.new. What should you tell your engineers during handoff?",
    "options": [
      {
        "key": "A",
        "label": "\"This is production-ready, please deploy it.\""
      },
      {
        "key": "B",
        "label": "\"This validates the intended UX flow and logic, but lacks production-grade security and error handling.\""
      },
      {
        "key": "C",
        "label": "\"Don't look at the UI, just the code.\""
      },
      {
        "key": "D",
        "label": "\"I wrote this myself, so you don't have to work this week.\""
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 44,
    "question": "Scenario: You see a spike in 5xx errors on Monday morning. What is your immediate communication action?",
    "options": [
      {
        "key": "A",
        "label": "Post on LinkedIn about the incident."
      },
      {
        "key": "B",
        "label": "Proactively update stakeholders and own the incident status page."
      },
      {
        "key": "C",
        "label": "Wait for a user to complain before doing anything."
      },
      {
        "key": "D",
        "label": "Blame the intern in the team Slack."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 45,
    "question": "Scenario: You are choosing between \"SaaS Subscription\" and \"Usage-Based\" pricing for an API product. When should you choose Usage-Based?",
    "options": [
      {
        "key": "A",
        "label": "When you want predictable monthly revenue."
      },
      {
        "key": "B",
        "label": "When the value delivered (e.g., SMS sent) is directly measurable."
      },
      {
        "key": "C",
        "label": "When the product is a simple consumer game."
      },
      {
        "key": "D",
        "label": "When you have no way to track usage."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 46,
    "question": "True or False: In a \"Post-Mortem,\" you should name the specific person who made the mistake to ensure accountability.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 47,
    "question": "Scenario: You have only 200 active users. Should you run an A/B test on your primary button color?",
    "options": [
      {
        "key": "A",
        "label": "Yes, every change needs a test."
      },
      {
        "key": "B",
        "label": "No, you lack the statistical power for a meaningful result."
      },
      {
        "key": "C",
        "label": "Yes, if you run it for 6 months."
      },
      {
        "key": "D",
        "label": "No, button color doesn't matter."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 48,
    "question": "Which tool is the \"standard\" for self-hosted product analytics in Nigerian startups?",
    "options": [
      {
        "key": "A",
        "label": "Google Analytics"
      },
      {
        "key": "B",
        "label": "PostHog"
      },
      {
        "key": "C",
        "label": "Excel"
      },
      {
        "key": "D",
        "label": "Salesforce"
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 49,
    "question": "Scenario: An agent you built in n8n for \"Backlog Grooming\" keeps making hallucinated suggestions. What part of the GRADE prompt should you improve?",
    "options": [
      {
        "key": "A",
        "label": "Goal"
      },
      {
        "key": "B",
        "label": "Role"
      },
      {
        "key": "C",
        "label": "Data / Context (Ground it with more specific product rules and constraints)."
      },
      {
        "key": "D",
        "label": "Expected Output"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 50,
    "question": "True or False: A PM's job ends once the feature is successfully deployed to production.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 51,
    "question": "T/F: An Epic is smaller than a User Story.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 52,
    "question": "T/F: A/B testing one-time events like a brand launch is recommended.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 53,
    "question": "T/F: Unit tests are usually owned and written by Developers.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 54,
    "question": "T/F: An \"Annoyance Log\" is a valid way to find product opportunities.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 55,
    "question": "T/F: RICE stands for Revenue, Impact, Cost, and Effort.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 56,
    "question": "T/F: The \"Definition of Done\" is the same as Acceptance Criteria.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 57,
    "question": "T/F: Qualitative research (like interviews) can replace underpowered A/B tests.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 58,
    "question": "T/F: \"Snake_case\" is the recommended naming convention for event tracking.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 59,
    "question": "T/F: A PRD should contain as much technical jargon as possible to impress engineers.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 60,
    "question": "T/F: \"Safe\" HTTP methods include GET, while \"Unsafe\" includes POST.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 61,
    "question": "What does a \"2x2 Matrix\" (Value vs. Effort) help identify?",
    "options": [
      {
        "key": "A",
        "label": "Quick Wins"
      },
      {
        "key": "B",
        "label": "Long-term vision"
      },
      {
        "key": "C",
        "label": "Security vulnerabilities"
      },
      {
        "key": "D",
        "label": "Market size"
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 62,
    "question": "In the Kano model, a \"Delighter\" is a feature that:",
    "options": [
      {
        "key": "A",
        "label": "Is essential for basic operation."
      },
      {
        "key": "B",
        "label": "Exceeds expectations and creates high satisfaction."
      },
      {
        "key": "C",
        "label": "Users are indifferent to."
      },
      {
        "key": "D",
        "label": "Causes extreme frustration if missing."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 63,
    "question": "Weighted Shortest Job First (WSJF) prioritizes tasks by dividing:",
    "options": [
      {
        "key": "A",
        "label": "Cost of Delay by Job Size."
      },
      {
        "key": "B",
        "label": "Revenue by Headcount."
      },
      {
        "key": "C",
        "label": "Lines of Code by Developer Hourly Rate."
      },
      {
        "key": "D",
        "label": "User Count by Server Latency."
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 64,
    "question": "A \"Sample Ratio Mismatch\" (SRM) in an A/B test indicates:",
    "options": [
      {
        "key": "A",
        "label": "The test was a huge success."
      },
      {
        "key": "B",
        "label": "The randomization was broken, and results may be invalid."
      },
      {
        "key": "C",
        "label": "You need more variants."
      },
      {
        "key": "D",
        "label": "The system is perfectly healthy."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 65,
    "question": "True or False: The \"Post-launch 30 days\" should focus heavily on Activation Rate.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 66,
    "question": "What tool provides unmoderated usability testing at scale?",
    "options": [
      {
        "key": "A",
        "label": "Figma"
      },
      {
        "key": "B",
        "label": "Maze"
      },
      {
        "key": "C",
        "label": "Confluence"
      },
      {
        "key": "D",
        "label": "Slack"
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 67,
    "question": "An \"Aggregator\" node in an automation tool (like Make) does what?",
    "options": [
      {
        "key": "A",
        "label": "Splits data into many pieces."
      },
      {
        "key": "B",
        "label": "Collects multiple pieces of data back into one bundle."
      },
      {
        "key": "C",
        "label": "Automatically deletes files."
      },
      {
        "key": "D",
        "label": "Increases server speed."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 68,
    "question": "The primary risk of \"Agentic AI\" compared to standard chatbots is:",
    "options": [
      {
        "key": "A",
        "label": "They are more expensive."
      },
      {
        "key": "B",
        "label": "They are \"irreversible\" and can take real-world actions like charging a card."
      },
      {
        "key": "C",
        "label": "They have no personality."
      },
      {
        "key": "D",
        "label": "They don't work in dark mode."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 69,
    "question": "\"Throughput\" in system health is measured in:",
    "options": [
      {
        "key": "A",
        "label": "Requests Per Second (RPS)."
      },
      {
        "key": "B",
        "label": "Total number of users."
      },
      {
        "key": "C",
        "label": "Milliseconds."
      },
      {
        "key": "D",
        "label": "Dollars."
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 70,
    "question": "\"Churn\" is often referred to as the ________ in business fundamentals.",
    "options": [
      {
        "key": "A",
        "label": "Golden Ticket"
      },
      {
        "key": "B",
        "label": "North Star"
      },
      {
        "key": "C",
        "label": "Leaky Bucket"
      },
      {
        "key": "D",
        "label": "Growth Engine"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 71,
    "question": "What is the typical time-to-build for a functional prototype using modern AI tools?",
    "options": [
      {
        "key": "A",
        "label": "1 week"
      },
      {
        "key": "B",
        "label": "3 days"
      },
      {
        "key": "C",
        "label": "Under 30 minutes (e.g., 18 mins)."
      },
      {
        "key": "D",
        "label": "5 seconds"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 72,
    "question": "Which research method involves watching a user interact with a prototype while speaking their thoughts?",
    "options": [
      {
        "key": "A",
        "label": "Survey"
      },
      {
        "key": "B",
        "label": "Competitive Analysis"
      },
      {
        "key": "C",
        "label": "Think-Aloud Usability Test"
      },
      {
        "key": "D",
        "label": "Focus Group"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 73,
    "question": "In the \"Testing Pyramid,\" Integration Tests check:",
    "options": [
      {
        "key": "A",
        "label": "Single lines of code."
      },
      {
        "key": "B",
        "label": "How different modules and APIs work together."
      },
      {
        "key": "C",
        "label": "The color of the buttons."
      },
      {
        "key": "D",
        "label": "Market demand."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 74,
    "question": "The \"North Star Metric\" for Spotify is most likely:",
    "options": [
      {
        "key": "A",
        "label": "Number of songs in the library."
      },
      {
        "key": "B",
        "label": "Time Spent Listening."
      },
      {
        "key": "C",
        "label": "Number of employees in Sweden."
      },
      {
        "key": "D",
        "label": "Monthly revenue from ads."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 75,
    "question": "What is the most common reason for a \"Sample Ratio Mismatch\"?",
    "options": [
      {
        "key": "A",
        "label": "Technical bugs in the randomization logic."
      },
      {
        "key": "B",
        "label": "Too many users in the control group."
      },
      {
        "key": "C",
        "label": "The test ran for too long."
      },
      {
        "key": "D",
        "label": "The users were too smart."
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 76,
    "question": "True or False: Product Managers should own the SLA (legal agreement) for their product.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 77,
    "question": "A \"Theme-based\" roadmap focuses on ________ rather than ________.",
    "options": [
      {
        "key": "A",
        "label": "Outcomes/Problems; Features/Dates"
      },
      {
        "key": "B",
        "label": "Dates/Features; Problems/Outcomes"
      },
      {
        "key": "C",
        "label": "Designers/Devs; Users/Business"
      },
      {
        "key": "D",
        "label": "Cost/Revenue; Value/Effort"
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 78,
    "question": "What is the primary benefit of \"Automated Testing\"?",
    "options": [
      {
        "key": "A",
        "label": "It removes the need for QA engineers entirely."
      },
      {
        "key": "B",
        "label": "It allows for faster feedback and early defect detection."
      },
      {
        "key": "C",
        "label": "It makes the code 100% bug-free."
      },
      {
        "key": "D",
        "label": "It reduces the cost of electricity."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 79,
    "question": "\"Vague Language\" in Acceptance Criteria is considered a:",
    "options": [
      {
        "key": "A",
        "label": "Strategic advantage."
      },
      {
        "key": "B",
        "label": "Best practice."
      },
      {
        "key": "C",
        "label": "Common Pitfall."
      },
      {
        "key": "D",
        "label": "Designer request."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 80,
    "question": "The \"Acceptable Price Range\" in pricing research is found using the:",
    "options": [
      {
        "key": "A",
        "label": "RICE Model"
      },
      {
        "key": "B",
        "label": "Kano Model"
      },
      {
        "key": "C",
        "label": "Van Westendorp Model"
      },
      {
        "key": "D",
        "label": "WSJF Model"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 81,
    "question": "T/F: An \"Alert History\" marker on a dashboard helps identify if a deployment caused a performance dip.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 82,
    "question": "T/F: PMs at Moniepoint write \"6-pager\" docs inspired by Amazon.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 83,
    "question": "T/F: \"Continuous Testing\" is only done at the very end of the SDLC.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 84,
    "question": "T/F: A \"200 OK\" status code is usually a good sign for an API call.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 85,
    "question": "T/F: Every feature on the roadmap must be tied to an OKR.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 86,
    "question": "T/F: \"Vibe Coding\" means you don't need to understand any technical concepts.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 87,
    "question": "T/F: \"Synthetic Data\" is better than \"Real PII\" for UAT environments.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 88,
    "question": "T/F: In Scrum, the Daily Standup is a status report to the PM.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "False",
    "points": 1
  },
  {
    "id": 89,
    "question": "T/F: A \"Regression\" bug is something that used to work but is now broken.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 90,
    "question": "T/F: \"High Power, High Interest\" stakeholders should be \"Managed Closely.\"",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 91,
    "question": "What does the \"O\" in OKR stand for?",
    "options": [
      {
        "key": "A",
        "label": "Outcome"
      },
      {
        "key": "B",
        "label": "Operation"
      },
      {
        "key": "C",
        "label": "Objective"
      },
      {
        "key": "D",
        "label": "Organization"
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 92,
    "question": "Which tool is best for \"Knowledge Management\" and writing PRDs?",
    "options": [
      {
        "key": "A",
        "label": "Amplitude"
      },
      {
        "key": "B",
        "label": "Confluence"
      },
      {
        "key": "C",
        "label": "Sentry"
      },
      {
        "key": "D",
        "label": "Git"
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 93,
    "question": "A \"Must-Have\" feature in the Kano model is also called a:",
    "options": [
      {
        "key": "A",
        "label": "Basic Expectation."
      },
      {
        "key": "B",
        "label": "Delighter."
      },
      {
        "key": "C",
        "label": "Performance feature."
      },
      {
        "key": "D",
        "label": "Bug."
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 94,
    "question": "True or False: \"Git Stash\" allows a developer to save work without committing it to the main code.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 95,
    "question": "What is the \"First Byte\" (TTFB) a signal of?",
    "options": [
      {
        "key": "A",
        "label": "Server-side performance/latency."
      },
      {
        "key": "B",
        "label": "UI design quality."
      },
      {
        "key": "C",
        "label": "How many users are active."
      },
      {
        "key": "D",
        "label": "The total file size of the app."
      }
    ],
    "correct": "A",
    "points": 1
  },
  {
    "id": 96,
    "question": "In \"Agentic Automation,\" a \"Short-Term Memory\" exists for:",
    "options": [
      {
        "key": "A",
        "label": "1 year."
      },
      {
        "key": "B",
        "label": "1 month."
      },
      {
        "key": "C",
        "label": "The duration of a single workflow execution."
      },
      {
        "key": "D",
        "label": "5 seconds."
      }
    ],
    "correct": "C",
    "points": 1
  },
  {
    "id": 97,
    "question": "What is the goal of \"Grooming\" the backlog?",
    "options": [
      {
        "key": "A",
        "label": "To make it as long as possible."
      },
      {
        "key": "B",
        "label": "To keep it healthy, prioritized, and manageable."
      },
      {
        "key": "C",
        "label": "To delete all bugs."
      },
      {
        "key": "D",
        "label": "To show the CEO how much work is being done."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 98,
    "question": "True or False: \"Statistical Power\" of 80% is the industry standard for A/B tests.",
    "options": [
      {
        "key": "True",
        "label": "True"
      },
      {
        "key": "False",
        "label": "False"
      }
    ],
    "correct": "True",
    "points": 1
  },
  {
    "id": 99,
    "question": "Which of these is a \"Unsafe\" operation that can't easily be undone?",
    "options": [
      {
        "key": "A",
        "label": "Creating a draft email."
      },
      {
        "key": "B",
        "label": "Moving ₦1,000,000 between bank accounts."
      },
      {
        "key": "C",
        "label": "Changing a button's color in CSS."
      },
      {
        "key": "D",
        "label": "Writing a persona."
      }
    ],
    "correct": "B",
    "points": 1
  },
  {
    "id": 100,
    "question": "The ultimate goal of this Technical PM Masterclass is to develop a:",
    "options": [
      {
        "key": "A",
        "label": "Knowledge of coding in C++."
      },
      {
        "key": "B",
        "label": "Ability to ignore stakeholder requests."
      },
      {
        "key": "C",
        "label": "Catalytic Mindset — the ability to create clarity from ambiguity."
      },
      {
        "key": "D",
        "label": "Collection of cool badges for your CV."
      }
    ],
    "correct": "C",
    "points": 1
  }
];
