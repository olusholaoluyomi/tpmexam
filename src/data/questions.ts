// Auto-generated from questions CSV
export interface QuestionOption { key: string; label: string }
export interface Question { id: number; question: string; options: QuestionOption[]; correct: string; points: number; explanation?: string }

export const questions: Question[] = [
    {
        "id":  1,
        "question":  "A Product Manager primarily focuses on the _________, while a Project Manager focuses on the _________.",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How/When; Why/What"
                        },
                        {
                            "key":  "B",
                            "label":  "Why/What; How/When"
                        },
                        {
                            "key":  "C",
                            "label":  "Code/Design; Budget/Schedule"
                        },
                        {
                            "key":  "D",
                            "label":  "Sales/Marketing; Strategy/Vision"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "A Product Manager owns the Why (vision) and What (problem to solve), while a Project Manager owns the How (execution path) and When (schedule, delivery)."
    },
    {
        "id":  2,
        "question":  "Which of the following is NOT one of the \"Three Pillars\" of Product Management?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "User Experience (UX)"
                        },
                        {
                            "key":  "B",
                            "label":  "Business"
                        },
                        {
                            "key":  "C",
                            "label":  "Technology"
                        },
                        {
                            "key":  "D",
                            "label":  "Human Resources"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "The Three Pillars of Product Management are User Experience, Business, and Technology. HR is unrelated to the discipline's core lenses."
    },
    {
        "id":  3,
        "question":  "True or False: In modern product management, success is measured by the number of features shipped (Outputs).",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "Modern product management measures success by Outcomes (user/business impact), not Outputs (features shipped). Shipping more features doesn't equal product success."
    },
    {
        "id":  4,
        "question":  "According to the \"Myth of Execution,\" a team has failed if:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "They ship the feature late."
                        },
                        {
                            "key":  "B",
                            "label":  "The code is not well-documented."
                        },
                        {
                            "key":  "C",
                            "label":  "They ship perfectly working code that no one uses."
                        },
                        {
                            "key":  "D",
                            "label":  "They exceed the original budget."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "Product success is defined by adoption and value. A perfectly built feature that no one uses represents complete failure of the discovery and validation process."
    },
    {
        "id":  5,
        "question":  "What is the \"Holy Grail\" of Product-Market Fit (PMF)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Having 1 million registered users."
                        },
                        {
                            "key":  "B",
                            "label":  "Raising a Series A funding round."
                        },
                        {
                            "key":  "C",
                            "label":  "When 40%+ of users say they would be \"very disappointed\" without the product."
                        },
                        {
                            "key":  "D",
                            "label":  "When the app is featured on the App Store."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "Sean Ellis's Product-Market Fit benchmark: when 40%+ of surveyed users say they'd be 'very disappointed' without your product, you've achieved real PMF."
    },
    {
        "id":  6,
        "question":  "The \"5 Whys\" technique is primarily used to:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Interview 5 different users."
                        },
                        {
                            "key":  "B",
                            "label":  "Justify why a feature should be built to the CEO."
                        },
                        {
                            "key":  "C",
                            "label":  "Drill down from a surface symptom to a root cause."
                        },
                        {
                            "key":  "D",
                            "label":  "Estimate the time required for a sprint."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "The 5 Whys is a root-cause analysis technique - repeatedly asking 'why' drills past surface symptoms to the underlying systemic cause that should actually be solved."
    },
    {
        "id":  7,
        "question":  "In the Problem Statement formula, \"[User] struggles to [Action] because [Root Cause],\", the Root Cause explains:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "The feature to be built."
                        },
                        {
                            "key":  "B",
                            "label":  "Why the user is currently blocked."
                        },
                        {
                            "key":  "C",
                            "label":  "The cost of the problem."
                        },
                        {
                            "key":  "D",
                            "label":  "The competitor's weakness."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "In the problem statement formula, the Root Cause explains why the user is currently blocked, ensuring solutions address the real obstacle, not just symptoms."
    },
    {
        "id":  8,
        "question":  "True or False: During a Discovery Interview, the PM should spend at least 70% of the time talking to explain the vision.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "In discovery interviews the PM should listen ~70-80% of the time. Talking too much biases responses and prevents learning what the user actually thinks."
    },
    {
        "id":  9,
        "question":  "A \"User Persona\" is most effective when it is:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Based on broad demographic stereotypes (e.g., \"Millennials\")."
                        },
                        {
                            "key":  "B",
                            "label":  "A fictional character invented by the marketing team."
                        },
                        {
                            "key":  "C",
                            "label":  "A living representation built from real interview data."
                        },
                        {
                            "key":  "D",
                            "label":  "A one-time document that is never updated."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "Personas are only useful when grounded in real interview data and treated as living artifacts updated as understanding deepens - stereotypes mislead product decisions."
    },
    {
        "id":  10,
        "question":  "The \"Walking Skeleton\" in a story map represents:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A feature that has been deprecated."
                        },
                        {
                            "key":  "B",
                            "label":  "The minimum sequence of steps to complete an activity end-to-end."
                        },
                        {
                            "key":  "C",
                            "label":  "The most expensive part of the product."
                        },
                        {
                            "key":  "D",
                            "label":  "The visual design system (UI kit)."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "The Walking Skeleton is the thinnest end-to-end slice of an activity - the minimum sequence of steps that lets a user complete the journey before adding depth."
    },
    {
        "id":  11,
        "question":  "What percentage of product failures is attributed to bad requirements?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "10%"
                        },
                        {
                            "key":  "B",
                            "label":  "25%"
                        },
                        {
                            "key":  "C",
                            "label":  "40%"
                        },
                        {
                            "key":  "D",
                            "label":  "80%"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "Industry research (Standish Group, etc.) consistently attributes roughly 80% of product failures to bad or misunderstood requirements, not engineering quality."
    },
    {
        "id":  12,
        "question":  "Which section of a PRD is designed to prevent \"Scope Creep\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Goals & Success Metrics"
                        },
                        {
                            "key":  "B",
                            "label":  "User Stories"
                        },
                        {
                            "key":  "C",
                            "label":  "Scope: In / Out"
                        },
                        {
                            "key":  "D",
                            "label":  "Open Questions"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "The 'Scope: In / Out' section explicitly enumerates what is excluded, which is the primary defense against scope creep mid-build."
    },
    {
        "id":  13,
        "question":  "In the User Story format \"As a [user], I want to [action] so that [benefit],\", the \"so that\" clause defines the:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Technical requirement."
                        },
                        {
                            "key":  "B",
                            "label":  "Acceptance criteria."
                        },
                        {
                            "key":  "C",
                            "label":  "Intended outcome/value."
                        },
                        {
                            "key":  "D",
                            "label":  "Priority level."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "The 'so that' clause captures the intended outcome or value to the user - answering why the action matters, not what or how it's built."
    },
    {
        "id":  14,
        "question":  "INVEST is an acronym for high-quality user stories. What does the \"S\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Specific"
                        },
                        {
                            "key":  "B",
                            "label":  "Strategic"
                        },
                        {
                            "key":  "C",
                            "label":  "Small"
                        },
                        {
                            "key":  "D",
                            "label":  "Shared"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable. The 'S' stands for Small - stories should fit comfortably within a single sprint."
    },
    {
        "id":  15,
        "question":  "Acceptance Criteria (AC) should be:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Vague to allow for developer creativity."
                        },
                        {
                            "key":  "B",
                            "label":  "Testable and binary (pass/fail)."
                        },
                        {
                            "key":  "C",
                            "label":  "Written in technical code."
                        },
                        {
                            "key":  "D",
                            "label":  "Only written after the code is deployed."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "Acceptance Criteria must be testable and binary so the team can objectively verify a story is done. Vague criteria cause endless rework."
    },
    {
        "id":  16,
        "question":  "The \"Given/When/Then\" format is also known as:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Rule-oriented AC."
                        },
                        {
                            "key":  "B",
                            "label":  "Scenario-based AC."
                        },
                        {
                            "key":  "C",
                            "label":  "Waterfall documentation."
                        },
                        {
                            "key":  "D",
                            "label":  "User Story mapping."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "Given/When/Then is the BDD scenario-based format: Given a precondition, When an action occurs, Then an outcome should result."
    },
    {
        "id":  17,
        "question":  "In the RICE prioritization model, \"Reach\" is typically measured by:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How much revenue it brings."
                        },
                        {
                            "key":  "B",
                            "label":  "How difficult it is to build."
                        },
                        {
                            "key":  "C",
                            "label":  "The number of users affected in a specific timeframe."
                        },
                        {
                            "key":  "D",
                            "label":  "How much the CEO likes the idea."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "In RICE, Reach quantifies how many users a project will affect within a defined timeframe (e.g., users per quarter), grounding impact in scale."
    },
    {
        "id":  18,
        "question":  "A \"Spike\" is a task intended for:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Fixing a P0 bug."
                        },
                        {
                            "key":  "B",
                            "label":  "Research or technical exploration to reduce uncertainty."
                        },
                        {
                            "key":  "C",
                            "label":  "Building the final UI of a product."
                        },
                        {
                            "key":  "D",
                            "label":  "Pitching to investors."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "A Spike is a time-boxed research or technical exploration task used to reduce uncertainty before committing to a delivery estimate."
    },
    {
        "id":  19,
        "question":  "Who owns the Product Backlog in a Scrum team?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "The Scrum Master"
                        },
                        {
                            "key":  "B",
                            "label":  "The Product Owner (PM)"
                        },
                        {
                            "key":  "C",
                            "label":  "The Engineering Lead"
                        },
                        {
                            "key":  "D",
                            "label":  "The CEO"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "In Scrum the Product Owner (often the PM) owns the backlog - its content, ordering, and prioritization - to ensure the team builds the most valuable work next."
    },
    {
        "id":  20,
        "question":  "True or False: The \"Definition of Done\" should be shared and written down by the entire team.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "The Definition of Done must be explicit, written, and shared by the whole team so 'done' means the same thing to every member and stakeholder."
    },
    {
        "id":  21,
        "question":  "Which HTTP status code signifies that a resource was successfully \"Created\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "200 OK"
                        },
                        {
                            "key":  "B",
                            "label":  "201 Created"
                        },
                        {
                            "key":  "C",
                            "label":  "404 Not Found"
                        },
                        {
                            "key":  "D",
                            "label":  "500 Server Error"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "HTTP 201 Created specifically signals that a request succeeded and a new resource was created (e.g., after a POST). 200 OK is generic success."
    },
    {
        "id":  22,
        "question":  "The \"4 Golden Signals\" of system health include Latency, Traffic, Errors, and:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Saturation"
                        },
                        {
                            "key":  "B",
                            "label":  "Subscriptions"
                        },
                        {
                            "key":  "C",
                            "label":  "Sentiment"
                        },
                        {
                            "key":  "D",
                            "label":  "Security"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "Google SRE's Four Golden Signals are Latency, Traffic, Errors, and Saturation - covering speed, demand, failure, and resource pressure."
    },
    {
        "id":  23,
        "question":  "p99 Latency refers to:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "The average speed of all users."
                        },
                        {
                            "key":  "B",
                            "label":  "The speed experienced by the fastest 1% of users."
                        },
                        {
                            "key":  "C",
                            "label":  "The slowest 1% of requests, often impacting power users."
                        },
                        {
                            "key":  "D",
                            "label":  "The speed of the system when it is 99% saturated."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "p99 latency is the slowest 1% of requests. It matters because these tail-latency events disproportionately affect power users and reveal hidden bottlenecks."
    },
    {
        "id":  24,
        "question":  "Continuous Delivery (CD) differs from Continuous Deployment because:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Delivery is automated; Deployment is manual."
                        },
                        {
                            "key":  "B",
                            "label":  "Delivery requires a human to \"push the button\"; Deployment is fully automated."
                        },
                        {
                            "key":  "C",
                            "label":  "Delivery is for mobile apps; Deployment is for web."
                        },
                        {
                            "key":  "D",
                            "label":  "There is no difference."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "Continuous Delivery keeps every change deployable but a human approves the release; Continuous Deployment automatically pushes every passing change to production."
    },
    {
        "id":  25,
        "question":  "True or False: It is safe and recommended to demo new features to stakeholders from a \"Development\" environment.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "Demos must come from a stable, production-like environment (staging). Dev environments are unstable and demoing from them risks broken or misleading impressions."
    },
    {
        "id":  26,
        "question":  "What is the primary purpose of a \"Feature Flag\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "To track user marketing channels."
                        },
                        {
                            "key":  "B",
                            "label":  "To toggle features on/off in production without new code deployments."
                        },
                        {
                            "key":  "C",
                            "label":  "To flag bugs in Jira."
                        },
                        {
                            "key":  "D",
                            "label":  "To signal that a sprint is finished."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "Feature flags decouple deployment from release, letting PMs toggle features per user/segment in production without redeploying code - enabling safe rollouts and instant rollback."
    },
    {
        "id":  27,
        "question":  "A Post-Incident Review (PIR) should be conducted:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Within 48–72 hours of resolving a critical incident."
                        },
                        {
                            "key":  "B",
                            "label":  "Only if the customer asks for one."
                        },
                        {
                            "key":  "C",
                            "label":  "Once a month as a general meeting."
                        },
                        {
                            "key":  "D",
                            "label":  "Before the feature is even built."
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "PIRs should run within 48-72 hours while context is fresh, balancing immediate stabilization with timely, accurate root-cause learning."
    },
    {
        "id":  28,
        "question":  "In the \"Testing Pyramid,\" which layer should have the largest number of tests?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "UAT"
                        },
                        {
                            "key":  "B",
                            "label":  "Integration Tests"
                        },
                        {
                            "key":  "C",
                            "label":  "Unit Tests"
                        },
                        {
                            "key":  "D",
                            "label":  "UI/Manual Tests"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "The testing pyramid prescribes many fast, cheap unit tests at the base, fewer integration tests in the middle, and very few slow UI/manual tests at the top."
    },
    {
        "id":  29,
        "question":  "Equivalence Partitioning is a QA technique used to:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Test one representative from a group of identical inputs."
                        },
                        {
                            "key":  "B",
                            "label":  "Give all developers equal tasks."
                        },
                        {
                            "key":  "C",
                            "label":  "Divide the budget equally between features."
                        },
                        {
                            "key":  "D",
                            "label":  "Partition the database into three sections."
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "Equivalence Partitioning groups inputs that should be treated identically by the system, so testing one representative covers the whole class - efficient coverage."
    },
    {
        "id":  30,
        "question":  "UAT (User Acceptance Testing) is primarily focused on:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Finding syntax errors in code."
                        },
                        {
                            "key":  "B",
                            "label":  "Testing API response times."
                        },
                        {
                            "key":  "C",
                            "label":  "Ensuring the product meets business requirements and user needs."
                        },
                        {
                            "key":  "D",
                            "label":  "Stress testing the server."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "UAT validates that the product meets business requirements and real user needs in production-like conditions - it's about fitness-for-purpose, not code quality."
    },
    {
        "id":  31,
        "question":  "The AARRR funnel stands for Acquisition, Activation, Retention, Referral, and:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Resale"
                        },
                        {
                            "key":  "B",
                            "label":  "Reach"
                        },
                        {
                            "key":  "C",
                            "label":  "Revenue"
                        },
                        {
                            "key":  "D",
                            "label":  "Redesign"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "The AARRR Pirate Metrics funnel: Acquisition, Activation, Retention, Referral, Revenue - covering the full user lifecycle."
    },
    {
        "id":  32,
        "question":  "A \"Vanity Metric\" is a number that:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Drives strategic product decisions."
                        },
                        {
                            "key":  "B",
                            "label":  "Looks impressive but lacks actionable insight (e.g., total registered users)."
                        },
                        {
                            "key":  "C",
                            "label":  "Measures the true North Star."
                        },
                        {
                            "key":  "D",
                            "label":  "Is only used by designers."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "Vanity metrics (e.g., total registered users) look good but don't drive decisions because they don't reveal whether the product is delivering value."
    },
    {
        "id":  33,
        "question":  "The \"North Star Metric\" should ideally measure:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Core user value (e.g., \"Messages Sent\" for Slack)."
                        },
                        {
                            "key":  "B",
                            "label":  "Total number of app downloads."
                        },
                        {
                            "key":  "C",
                            "label":  "Monthly revenue."
                        },
                        {
                            "key":  "D",
                            "label":  "Number of employees."
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "A North Star Metric should capture the core value users get - 'Messages Sent' for Slack means real communication is happening, the product's true purpose."
    },
    {
        "id":  34,
        "question":  "True or False: Correlation always implies Causation in product analytics.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "Correlation does not imply causation; two metrics may move together without one causing the other. A/B tests or controlled experiments are needed to establish causality."
    },
    {
        "id":  35,
        "question":  "In A/B testing, \"P-Hacking\" refers to the mistake of:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Hacking the competitor's app."
                        },
                        {
                            "key":  "B",
                            "label":  "Checking results daily and stopping the test early because the graph looks good."
                        },
                        {
                            "key":  "C",
                            "label":  "Using too many \"P\" variables in SQL."
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypting data."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "P-hacking means peeking at A/B test results and stopping early when they look favorable, inflating false-positive rates and producing unreliable conclusions."
    },
    {
        "id":  36,
        "question":  "Minimum Detectable Effect (MDE) is:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "The smallest bug a QA can find."
                        },
                        {
                            "key":  "B",
                            "label":  "The least amount of effort a dev can put into a ticket."
                        },
                        {
                            "key":  "C",
                            "label":  "The smallest improvement an experiment can reliably detect."
                        },
                        {
                            "key":  "D",
                            "label":  "The minimum number of users needed for a survey."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "MDE is the smallest true effect size your experiment can reliably detect with given sample size and power - it bounds what 'no significant result' actually means."
    },
    {
        "id":  37,
        "question":  "\"Vibe Coding\" is a new PM workflow where:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "PMs listen to music while writing PRDs."
                        },
                        {
                            "key":  "B",
                            "label":  "PMs describe intent in plain language and AI writes the functional code."
                        },
                        {
                            "key":  "C",
                            "label":  "PMs only work on \"vibe-related\" social features."
                        },
                        {
                            "key":  "D",
                            "label":  "Developers use AI to write unit tests only."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "Vibe Coding is the workflow where PMs describe intent in natural language and AI agents generate the functional code, shifting the PM toward intent-design."
    },
    {
        "id":  38,
        "question":  "Retrieval-Augmented Generation (RAG) is used to:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Generate random user personas."
                        },
                        {
                            "key":  "B",
                            "label":  "Give AI access to internal company documents to provide grounded answers."
                        },
                        {
                            "key":  "C",
                            "label":  "Automatically delete old Slack messages."
                        },
                        {
                            "key":  "D",
                            "label":  "Speed up the deployment pipeline."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "RAG grounds an LLM by retrieving relevant internal documents at query time, so answers cite real company data rather than relying solely on model memory."
    },
    {
        "id":  39,
        "question":  "The Model Context Protocol (MCP) is best described as:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A new legal framework for AI."
                        },
                        {
                            "key":  "B",
                            "label":  "A standard that allows AI models to connect to various data sources/tools."
                        },
                        {
                            "key":  "C",
                            "label":  "A protocol for human-to-human communication."
                        },
                        {
                            "key":  "D",
                            "label":  "An encrypted database."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "MCP is an open standard letting AI models connect to external tools and data sources through a uniform interface, similar to a USB-C for AI."
    },
    {
        "id":  40,
        "question":  "The GRADE framework for agentic prompting stands for Goal, Role, Actions, Data, and:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Effort"
                        },
                        {
                            "key":  "B",
                            "label":  "Engineering"
                        },
                        {
                            "key":  "C",
                            "label":  "Expected Output"
                        },
                        {
                            "key":  "D",
                            "label":  "Evidence"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "GRADE = Goal, Role, Actions, Data, Expected Output - the 'E' specifies the desired output format/shape so the agent's response is usable downstream."
    },
    {
        "id":  41,
        "question":  "Scenario: Your funnel shows a 70% drop-off at the \"Link Bank\" step. As a PM, what is your #1 priority?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Increase Instagram ad spend to get more users."
                        },
                        {
                            "key":  "B",
                            "label":  "Fix the onboarding friction at the bank link step."
                        },
                        {
                            "key":  "C",
                            "label":  "Build a new \"Social Feed\" feature."
                        },
                        {
                            "key":  "D",
                            "label":  "Change the app's logo."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "Acquiring more users into a leaky funnel wastes spend. The biggest leverage is fixing the 70% drop-off point first, then scaling acquisition."
    },
    {
        "id":  42,
        "question":  "Scenario: A CEO demands a feature mid-sprint that isn't on the roadmap. What is the best \"AI-Ready PM\" response?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "\"Yes, we will start it immediately.\""
                        },
                        {
                            "key":  "B",
                            "label":  "\"No, the roadmap is frozen.\""
                        },
                        {
                            "key":  "C",
                            "label":  "\"I understand the goal. Let's look at the data and see what we would have to trade off to build this.\""
                        },
                        {
                            "key":  "D",
                            "label":  "Ignore the message."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "The mature TPM response acknowledges the goal, then surfaces the trade-off using data so the CEO sees the cost of the request - collaborative not combative."
    },
    {
        "id":  43,
        "question":  "Scenario: You are building a prototype in Bolt.new. What should you tell your engineers during handoff?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "\"This is production-ready, please deploy it.\""
                        },
                        {
                            "key":  "B",
                            "label":  "\"This validates the intended UX flow and logic, but lacks production-grade security and error handling.\""
                        },
                        {
                            "key":  "C",
                            "label":  "\"Don't look at the UI, just the code.\""
                        },
                        {
                            "key":  "D",
                            "label":  "\"I wrote this myself, so you don't have to work this week.\""
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "AI-built prototypes validate UX and logic but lack production hardening (security, error handling, scale). Setting that expectation prevents misuse downstream."
    },
    {
        "id":  44,
        "question":  "Scenario: You see a spike in 5xx errors on Monday morning. What is your immediate communication action?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Post on LinkedIn about the incident."
                        },
                        {
                            "key":  "B",
                            "label":  "Proactively update stakeholders and own the incident status page."
                        },
                        {
                            "key":  "C",
                            "label":  "Wait for a user to complain before doing anything."
                        },
                        {
                            "key":  "D",
                            "label":  "Blame the intern in the team Slack."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "Owning the incident communication and proactively updating stakeholders maintains trust; silence and blame both damage credibility during incidents."
    },
    {
        "id":  45,
        "question":  "Scenario: You are choosing between \"SaaS Subscription\" and \"Usage-Based\" pricing for an API product. When should you choose Usage-Based?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "When you want predictable monthly revenue."
                        },
                        {
                            "key":  "B",
                            "label":  "When the value delivered (e.g., SMS sent) is directly measurable."
                        },
                        {
                            "key":  "C",
                            "label":  "When the product is a simple consumer game."
                        },
                        {
                            "key":  "D",
                            "label":  "When you have no way to track usage."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "Usage-based pricing aligns price with value when consumption is measurable (e.g., SMS sent, API calls). It scales naturally with customer success."
    },
    {
        "id":  46,
        "question":  "True or False: In a \"Post-Mortem,\" you should name the specific person who made the mistake to ensure accountability.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "Blameless post-mortems focus on systemic causes, not individuals. Naming people destroys psychological safety and discourages future incident reporting."
    },
    {
        "id":  47,
        "question":  "Scenario: You have only 200 active users. Should you run an A/B test on your primary button color?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Yes, every change needs a test."
                        },
                        {
                            "key":  "B",
                            "label":  "No, you lack the statistical power for a meaningful result."
                        },
                        {
                            "key":  "C",
                            "label":  "Yes, if you run it for 6 months."
                        },
                        {
                            "key":  "D",
                            "label":  "No, button color doesn't matter."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "With only 200 users you lack statistical power to detect realistic effect sizes - qualitative methods or larger MDEs are better than an underpowered test."
    },
    {
        "id":  48,
        "question":  "Which tool is the \"standard\" for self-hosted product analytics in Nigerian startups?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Google Analytics"
                        },
                        {
                            "key":  "B",
                            "label":  "PostHog"
                        },
                        {
                            "key":  "C",
                            "label":  "Excel"
                        },
                        {
                            "key":  "D",
                            "label":  "Salesforce"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "PostHog is the open-source, self-hostable analytics platform widely adopted by African startups for product analytics with full data ownership."
    },
    {
        "id":  49,
        "question":  "Scenario: An agent you built in n8n for \"Backlog Grooming\" keeps making hallucinated suggestions. What part of the GRADE prompt should you improve?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Goal"
                        },
                        {
                            "key":  "B",
                            "label":  "Role"
                        },
                        {
                            "key":  "C",
                            "label":  "Data / Context (Ground it with more specific product rules and constraints)."
                        },
                        {
                            "key":  "D",
                            "label":  "Expected Output"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "Hallucinations usually mean the model lacks grounding. Strengthening Data/Context with specific product rules and constraints reduces fabricated outputs."
    },
    {
        "id":  50,
        "question":  "True or False: A PM's job ends once the feature is successfully deployed to production.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "A PM's job continues post-launch through measurement, iteration, and learning. Shipping is the start of the feedback loop, not the finish line."
    },
    {
        "id":  51,
        "question":  "T/F: An Epic is smaller than a User Story.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  52,
        "question":  "T/F: A/B testing one-time events like a brand launch is recommended.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  53,
        "question":  "T/F: Unit tests are usually owned and written by Developers.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  54,
        "question":  "T/F: An \"Annoyance Log\" is a valid way to find product opportunities.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  55,
        "question":  "T/F: RICE stands for Revenue, Impact, Cost, and Effort.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  56,
        "question":  "T/F: The \"Definition of Done\" is the same as Acceptance Criteria.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  57,
        "question":  "T/F: Qualitative research (like interviews) can replace underpowered A/B tests.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  58,
        "question":  "T/F: \"Snake_case\" is the recommended naming convention for event tracking.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  59,
        "question":  "T/F: A PRD should contain as much technical jargon as possible to impress engineers.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  60,
        "question":  "T/F: \"Safe\" HTTP methods include GET, while \"Unsafe\" includes POST.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  61,
        "question":  "What does a \"2x2 Matrix\" (Value vs. Effort) help identify?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Quick Wins"
                        },
                        {
                            "key":  "B",
                            "label":  "Long-term vision"
                        },
                        {
                            "key":  "C",
                            "label":  "Security vulnerabilities"
                        },
                        {
                            "key":  "D",
                            "label":  "Market size"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Quick Wins' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  62,
        "question":  "In the Kano model, a \"Delighter\" is a feature that:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Is essential for basic operation."
                        },
                        {
                            "key":  "B",
                            "label":  "Exceeds expectations and creates high satisfaction."
                        },
                        {
                            "key":  "C",
                            "label":  "Users are indifferent to."
                        },
                        {
                            "key":  "D",
                            "label":  "Causes extreme frustration if missing."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Exceeds expectations and creates high satisfaction' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  63,
        "question":  "Weighted Shortest Job First (WSJF) prioritizes tasks by dividing:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Cost of Delay by Job Size."
                        },
                        {
                            "key":  "B",
                            "label":  "Revenue by Headcount."
                        },
                        {
                            "key":  "C",
                            "label":  "Lines of Code by Developer Hourly Rate."
                        },
                        {
                            "key":  "D",
                            "label":  "User Count by Server Latency."
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Cost of Delay by Job Size' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  64,
        "question":  "A \"Sample Ratio Mismatch\" (SRM) in an A/B test indicates:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "The test was a huge success."
                        },
                        {
                            "key":  "B",
                            "label":  "The randomization was broken, and results may be invalid."
                        },
                        {
                            "key":  "C",
                            "label":  "You need more variants."
                        },
                        {
                            "key":  "D",
                            "label":  "The system is perfectly healthy."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'The randomization was broken, and results may be invalid' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  65,
        "question":  "True or False: The \"Post-launch 30 days\" should focus heavily on Activation Rate.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  66,
        "question":  "What tool provides unmoderated usability testing at scale?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Figma"
                        },
                        {
                            "key":  "B",
                            "label":  "Maze"
                        },
                        {
                            "key":  "C",
                            "label":  "Confluence"
                        },
                        {
                            "key":  "D",
                            "label":  "Slack"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Maze' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  67,
        "question":  "An \"Aggregator\" node in an automation tool (like Make) does what?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Splits data into many pieces."
                        },
                        {
                            "key":  "B",
                            "label":  "Collects multiple pieces of data back into one bundle."
                        },
                        {
                            "key":  "C",
                            "label":  "Automatically deletes files."
                        },
                        {
                            "key":  "D",
                            "label":  "Increases server speed."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Collects multiple pieces of data back into one bundle' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  68,
        "question":  "The primary risk of \"Agentic AI\" compared to standard chatbots is:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "They are more expensive."
                        },
                        {
                            "key":  "B",
                            "label":  "They are \"irreversible\" and can take real-world actions like charging a card."
                        },
                        {
                            "key":  "C",
                            "label":  "They have no personality."
                        },
                        {
                            "key":  "D",
                            "label":  "They don't work in dark mode."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'They are \"irreversible\" and can take real-world actions like charging a card' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  69,
        "question":  "\"Throughput\" in system health is measured in:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Requests Per Second (RPS)."
                        },
                        {
                            "key":  "B",
                            "label":  "Total number of users."
                        },
                        {
                            "key":  "C",
                            "label":  "Milliseconds."
                        },
                        {
                            "key":  "D",
                            "label":  "Dollars."
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Requests Per Second (RPS)' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  70,
        "question":  "\"Churn\" is often referred to as the ________ in business fundamentals.",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Golden Ticket"
                        },
                        {
                            "key":  "B",
                            "label":  "North Star"
                        },
                        {
                            "key":  "C",
                            "label":  "Leaky Bucket"
                        },
                        {
                            "key":  "D",
                            "label":  "Growth Engine"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Leaky Bucket' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  71,
        "question":  "What is the typical time-to-build for a functional prototype using modern AI tools?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "1 week"
                        },
                        {
                            "key":  "B",
                            "label":  "3 days"
                        },
                        {
                            "key":  "C",
                            "label":  "Under 30 minutes (e.g., 18 mins)."
                        },
                        {
                            "key":  "D",
                            "label":  "5 seconds"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Under 30 minutes (e.g., 18 mins)' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  72,
        "question":  "Which research method involves watching a user interact with a prototype while speaking their thoughts?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Survey"
                        },
                        {
                            "key":  "B",
                            "label":  "Competitive Analysis"
                        },
                        {
                            "key":  "C",
                            "label":  "Think-Aloud Usability Test"
                        },
                        {
                            "key":  "D",
                            "label":  "Focus Group"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Think-Aloud Usability Test' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  73,
        "question":  "In the \"Testing Pyramid,\" Integration Tests check:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Single lines of code."
                        },
                        {
                            "key":  "B",
                            "label":  "How different modules and APIs work together."
                        },
                        {
                            "key":  "C",
                            "label":  "The color of the buttons."
                        },
                        {
                            "key":  "D",
                            "label":  "Market demand."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'How different modules and APIs work together' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  74,
        "question":  "The \"North Star Metric\" for Spotify is most likely:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Number of songs in the library."
                        },
                        {
                            "key":  "B",
                            "label":  "Time Spent Listening."
                        },
                        {
                            "key":  "C",
                            "label":  "Number of employees in Sweden."
                        },
                        {
                            "key":  "D",
                            "label":  "Monthly revenue from ads."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Time Spent Listening' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  75,
        "question":  "What is the most common reason for a \"Sample Ratio Mismatch\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Technical bugs in the randomization logic."
                        },
                        {
                            "key":  "B",
                            "label":  "Too many users in the control group."
                        },
                        {
                            "key":  "C",
                            "label":  "The test ran for too long."
                        },
                        {
                            "key":  "D",
                            "label":  "The users were too smart."
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Technical bugs in the randomization logic' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  76,
        "question":  "True or False: Product Managers should own the SLA (legal agreement) for their product.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  77,
        "question":  "A \"Theme-based\" roadmap focuses on ________ rather than ________.",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Outcomes/Problems; Features/Dates"
                        },
                        {
                            "key":  "B",
                            "label":  "Dates/Features; Problems/Outcomes"
                        },
                        {
                            "key":  "C",
                            "label":  "Designers/Devs; Users/Business"
                        },
                        {
                            "key":  "D",
                            "label":  "Cost/Revenue; Value/Effort"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Outcomes/Problems; Features/Dates' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  78,
        "question":  "What is the primary benefit of \"Automated Testing\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "It removes the need for QA engineers entirely."
                        },
                        {
                            "key":  "B",
                            "label":  "It allows for faster feedback and early defect detection."
                        },
                        {
                            "key":  "C",
                            "label":  "It makes the code 100% bug-free."
                        },
                        {
                            "key":  "D",
                            "label":  "It reduces the cost of electricity."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'It allows for faster feedback and early defect detection' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  79,
        "question":  "\"Vague Language\" in Acceptance Criteria is considered a:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Strategic advantage."
                        },
                        {
                            "key":  "B",
                            "label":  "Best practice."
                        },
                        {
                            "key":  "C",
                            "label":  "Common Pitfall."
                        },
                        {
                            "key":  "D",
                            "label":  "Designer request."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Common Pitfall' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  80,
        "question":  "The \"Acceptable Price Range\" in pricing research is found using the:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "RICE Model"
                        },
                        {
                            "key":  "B",
                            "label":  "Kano Model"
                        },
                        {
                            "key":  "C",
                            "label":  "Van Westendorp Model"
                        },
                        {
                            "key":  "D",
                            "label":  "WSJF Model"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Van Westendorp Model' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  81,
        "question":  "T/F: An \"Alert History\" marker on a dashboard helps identify if a deployment caused a performance dip.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  82,
        "question":  "T/F: PMs at Moniepoint write \"6-pager\" docs inspired by Amazon.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  83,
        "question":  "T/F: \"Continuous Testing\" is only done at the very end of the SDLC.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  84,
        "question":  "T/F: A \"200 OK\" status code is usually a good sign for an API call.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  85,
        "question":  "T/F: Every feature on the roadmap must be tied to an OKR.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  86,
        "question":  "T/F: \"Vibe Coding\" means you don't need to understand any technical concepts.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  87,
        "question":  "T/F: \"Synthetic Data\" is better than \"Real PII\" for UAT environments.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  88,
        "question":  "T/F: In Scrum, the Daily Standup is a status report to the PM.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  89,
        "question":  "T/F: A \"Regression\" bug is something that used to work but is now broken.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  90,
        "question":  "T/F: \"High Power, High Interest\" stakeholders should be \"Managed Closely.\"",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  91,
        "question":  "What does the \"O\" in OKR stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Outcome"
                        },
                        {
                            "key":  "B",
                            "label":  "Operation"
                        },
                        {
                            "key":  "C",
                            "label":  "Objective"
                        },
                        {
                            "key":  "D",
                            "label":  "Organization"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Objective' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  92,
        "question":  "Which tool is best for \"Knowledge Management\" and writing PRDs?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Amplitude"
                        },
                        {
                            "key":  "B",
                            "label":  "Confluence"
                        },
                        {
                            "key":  "C",
                            "label":  "Sentry"
                        },
                        {
                            "key":  "D",
                            "label":  "Git"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Confluence' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  93,
        "question":  "A \"Must-Have\" feature in the Kano model is also called a:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Basic Expectation."
                        },
                        {
                            "key":  "B",
                            "label":  "Delighter."
                        },
                        {
                            "key":  "C",
                            "label":  "Performance feature."
                        },
                        {
                            "key":  "D",
                            "label":  "Bug."
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Basic Expectation' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  94,
        "question":  "True or False: \"Git Stash\" allows a developer to save work without committing it to the main code.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  95,
        "question":  "What is the \"First Byte\" (TTFB) a signal of?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Server-side performance/latency."
                        },
                        {
                            "key":  "B",
                            "label":  "UI design quality."
                        },
                        {
                            "key":  "C",
                            "label":  "How many users are active."
                        },
                        {
                            "key":  "D",
                            "label":  "The total file size of the app."
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Server-side performance/latency' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  96,
        "question":  "In \"Agentic Automation,\" a \"Short-Term Memory\" exists for:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "1 year."
                        },
                        {
                            "key":  "B",
                            "label":  "1 month."
                        },
                        {
                            "key":  "C",
                            "label":  "The duration of a single workflow execution."
                        },
                        {
                            "key":  "D",
                            "label":  "5 seconds."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'The duration of a single workflow execution' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  97,
        "question":  "What is the goal of \"Grooming\" the backlog?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "To make it as long as possible."
                        },
                        {
                            "key":  "B",
                            "label":  "To keep it healthy, prioritized, and manageable."
                        },
                        {
                            "key":  "C",
                            "label":  "To delete all bugs."
                        },
                        {
                            "key":  "D",
                            "label":  "To show the CEO how much work is being done."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'To keep it healthy, prioritized, and manageable' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  98,
        "question":  "True or False: \"Statistical Power\" of 80% is the industry standard for A/B tests.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  99,
        "question":  "Which of these is a \"Unsafe\" operation that can't easily be undone?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Creating a draft email."
                        },
                        {
                            "key":  "B",
                            "label":  "Moving ₦1,000,000 between bank accounts."
                        },
                        {
                            "key":  "C",
                            "label":  "Changing a button's color in CSS."
                        },
                        {
                            "key":  "D",
                            "label":  "Writing a persona."
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Moving ₦1,000,000 between bank accounts' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  100,
        "question":  "The ultimate goal of this Technical PM Masterclass is to develop a:",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Knowledge of coding in C++."
                        },
                        {
                            "key":  "B",
                            "label":  "Ability to ignore stakeholder requests."
                        },
                        {
                            "key":  "C",
                            "label":  "Catalytic Mindset — the ability to create clarity from ambiguity."
                        },
                        {
                            "key":  "D",
                            "label":  "Collection of cool badges for your CV."
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Catalytic Mindset — the ability to create clarity from ambiguity' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  101,
        "question":  "What is the primary benefit of a \"Minimum Viable Product\" (MVP)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "To validate assumptions with the least effort"
                        },
                        {
                            "key":  "B",
                            "label":  "To release a bug-free product"
                        },
                        {
                            "key":  "C",
                            "label":  "To impress investors"
                        },
                        {
                            "key":  "D",
                            "label":  "To replace market research"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'To validate assumptions with the least effort' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  102,
        "question":  "Which stakeholder is MOST important to involve during product discovery?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "The CEO"
                        },
                        {
                            "key":  "B",
                            "label":  "The end user"
                        },
                        {
                            "key":  "C",
                            "label":  "The legal team"
                        },
                        {
                            "key":  "D",
                            "label":  "The sales team"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'The end user' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  103,
        "question":  "True or False: A Product Requirements Document (PRD) should never change after it is approved.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  104,
        "question":  "What does \"Dogfooding\" mean in product development?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Feeding pets at the office"
                        },
                        {
                            "key":  "B",
                            "label":  "Using your own product internally"
                        },
                        {
                            "key":  "C",
                            "label":  "Releasing unfinished features"
                        },
                        {
                            "key":  "D",
                            "label":  "Hiring external testers"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Using your own product internally' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  105,
        "question":  "Which metric is a leading indicator of customer retention?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Churn rate"
                        },
                        {
                            "key":  "B",
                            "label":  "Net Promoter Score (NPS)"
                        },
                        {
                            "key":  "C",
                            "label":  "Daily Active Users (DAU)"
                        },
                        {
                            "key":  "D",
                            "label":  "Customer Acquisition Cost (CAC)"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Net Promoter Score (NPS)' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  106,
        "question":  "True or False: A/B testing is only useful for UI changes.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  107,
        "question":  "What is the main purpose of a \"Product Roadmap\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "To list every feature ever requested"
                        },
                        {
                            "key":  "B",
                            "label":  "To communicate strategic direction and priorities"
                        },
                        {
                            "key":  "C",
                            "label":  "To track daily developer tasks"
                        },
                        {
                            "key":  "D",
                            "label":  "To report bugs to engineering"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'To communicate strategic direction and priorities' captures the core intent. Anchoring on this purpose keeps the team focused on outcomes instead of incidental side-effects of the practice."
    },
    {
        "id":  108,
        "question":  "Which of the following is a \"lagging indicator\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Number of new signups yesterday"
                        },
                        {
                            "key":  "B",
                            "label":  "Monthly recurring revenue (MRR)"
                        },
                        {
                            "key":  "C",
                            "label":  "User clicks on a button"
                        },
                        {
                            "key":  "D",
                            "label":  "Page load speed"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Monthly recurring revenue (MRR)' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  109,
        "question":  "True or False: The Product Manager should write all the code for the MVP.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  110,
        "question":  "What does \"Technical Debt\" refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Money owed to software vendors"
                        },
                        {
                            "key":  "B",
                            "label":  "The cost of fixing shortcuts in code"
                        },
                        {
                            "key":  "C",
                            "label":  "The time spent in meetings"
                        },
                        {
                            "key":  "D",
                            "label":  "The budget for new servers"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'The cost of fixing shortcuts in code' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  111,
        "question":  "Which framework is best for continuous experimentation?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Waterfall"
                        },
                        {
                            "key":  "B",
                            "label":  "Lean Startup"
                        },
                        {
                            "key":  "C",
                            "label":  "Six Sigma"
                        },
                        {
                            "key":  "D",
                            "label":  "CMMI"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Lean Startup' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  112,
        "question":  "True or False: Customer interviews should always be structured with a fixed script.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  113,
        "question":  "What is the purpose of a \"Buy-a-Feature\" exercise?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "To prioritize features based on willingness to pay"
                        },
                        {
                            "key":  "B",
                            "label":  "To sell the product to customers"
                        },
                        {
                            "key":  "C",
                            "label":  "To calculate engineering hours"
                        },
                        {
                            "key":  "D",
                            "label":  "To design the UI"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'To prioritize features based on willingness to pay' captures the core intent. Anchoring on this purpose keeps the team focused on outcomes instead of incidental side-effects of the practice."
    },
    {
        "id":  114,
        "question":  "Which of the following is a \"qualitative\" research method?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Web analytics"
                        },
                        {
                            "key":  "B",
                            "label":  "A/B test"
                        },
                        {
                            "key":  "C",
                            "label":  "User interview"
                        },
                        {
                            "key":  "D",
                            "label":  "Cohort analysis"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'User interview' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  115,
        "question":  "True or False: A high Net Promoter Score (NPS) guarantees product-market fit.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  116,
        "question":  "What does \"Opportunity Solution Tree\" help PMs do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Write code faster"
                        },
                        {
                            "key":  "B",
                            "label":  "Map desired outcomes to possible solutions"
                        },
                        {
                            "key":  "C",
                            "label":  "Calculate ROI"
                        },
                        {
                            "key":  "D",
                            "label":  "Manage team salaries"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Map desired outcomes to possible solutions' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  117,
        "question":  "Which of these is a sign of a healthy product backlog?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Hundreds of low-priority items"
                        },
                        {
                            "key":  "B",
                            "label":  "Regular grooming and clear priorities"
                        },
                        {
                            "key":  "C",
                            "label":  "Only bugs, no new features"
                        },
                        {
                            "key":  "D",
                            "label":  "Items older than 6 months"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Regular grooming and clear priorities' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  118,
        "question":  "True or False: The PM should attend every daily standup.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  119,
        "question":  "What is the primary goal of a \"beta launch\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Public release"
                        },
                        {
                            "key":  "B",
                            "label":  "Learn from real users with limited exposure"
                        },
                        {
                            "key":  "C",
                            "label":  "Generate maximum revenue"
                        },
                        {
                            "key":  "D",
                            "label":  "Replace QA testing"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Learn from real users with limited exposure' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  120,
        "question":  "Which of the following is NOT a common product pricing model?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Freemium"
                        },
                        {
                            "key":  "B",
                            "label":  "Subscription"
                        },
                        {
                            "key":  "C",
                            "label":  "Unit testing"
                        },
                        {
                            "key":  "D",
                            "label":  "Usage-based"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Unit testing' is the odd one out - it doesn't belong with the others, which all share the defining attribute the question is testing."
    },
    {
        "id":  121,
        "question":  "True or False: \"Wizard of Oz\" testing involves a fully functional automated system.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  122,
        "question":  "What does \"Conway's Law\" state about software?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Systems mirror the communication structure of the organization"
                        },
                        {
                            "key":  "B",
                            "label":  "Software must be rewritten every two years"
                        },
                        {
                            "key":  "C",
                            "label":  "All bugs are due to poor coding"
                        },
                        {
                            "key":  "D",
                            "label":  "Users always want more features"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Systems mirror the communication structure of the organization' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  123,
        "question":  "Which of the following is a \"zero-day vulnerability\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A bug that has existed for 30 days"
                        },
                        {
                            "key":  "B",
                            "label":  "A security flaw exploited before the vendor knows"
                        },
                        {
                            "key":  "C",
                            "label":  "A feature that takes zero days to build"
                        },
                        {
                            "key":  "D",
                            "label":  "A test that passes on day zero"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'A security flaw exploited before the vendor knows' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  124,
        "question":  "True or False: A \"retrospective\" is only held at the end of the project.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  125,
        "question":  "What is the main output of a \"design sprint\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A deployed feature"
                        },
                        {
                            "key":  "B",
                            "label":  "A tested prototype with user feedback"
                        },
                        {
                            "key":  "C",
                            "label":  "A marketing plan"
                        },
                        {
                            "key":  "D",
                            "label":  "A budget spreadsheet"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'A tested prototype with user feedback' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  126,
        "question":  "Which of the following is a \"session replay\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Google Analytics"
                        },
                        {
                            "key":  "B",
                            "label":  "Hotjar"
                        },
                        {
                            "key":  "C",
                            "label":  "Tableau"
                        },
                        {
                            "key":  "D",
                            "label":  "Postman"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Hotjar' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  127,
        "question":  "True or False: \"Dark launching\" means releasing a feature without announcing it to users.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  128,
        "question":  "What does \"API rate limiting\" protect against?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Too many users"
                        },
                        {
                            "key":  "B",
                            "label":  "Denial-of-service attacks"
                        },
                        {
                            "key":  "C",
                            "label":  "Missing documentation"
                        },
                        {
                            "key":  "D",
                            "label":  "Slow database queries"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Denial-of-service attacks' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  129,
        "question":  "Which of the following is a benefit of \"continuous integration\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "No need for testing"
                        },
                        {
                            "key":  "B",
                            "label":  "Fewer merge conflicts"
                        },
                        {
                            "key":  "C",
                            "label":  "Faster manual testing"
                        },
                        {
                            "key":  "D",
                            "label":  "Less code"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Fewer merge conflicts' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  130,
        "question":  "True or False: A PM should never say \"no\" to a stakeholder request.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  131,
        "question":  "What is the \"mom test\" in customer interviews?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Interviewing only mothers"
                        },
                        {
                            "key":  "B",
                            "label":  "Avoiding leading questions that validate your idea"
                        },
                        {
                            "key":  "C",
                            "label":  "Asking yes/no questions"
                        },
                        {
                            "key":  "D",
                            "label":  "Talking at least 50% of the time"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Avoiding leading questions that validate your idea' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  132,
        "question":  "Which of the following is a \"hard skill\" for a Technical PM?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Empathy"
                        },
                        {
                            "key":  "B",
                            "label":  "SQL querying"
                        },
                        {
                            "key":  "C",
                            "label":  "Communication"
                        },
                        {
                            "key":  "D",
                            "label":  "Leadership"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'SQL querying' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  133,
        "question":  "True or False: \"Feature creep\" is always caused by the engineering team.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  134,
        "question":  "What does \"MVP\" stand for in Lean Startup?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Most Valuable Product"
                        },
                        {
                            "key":  "B",
                            "label":  "Minimum Viable Product"
                        },
                        {
                            "key":  "C",
                            "label":  "Maximum Value Proposition"
                        },
                        {
                            "key":  "D",
                            "label":  "Model Verification Process"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Minimum Viable Product' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  135,
        "question":  "Which of the following is a \"Pareto principle\" application in product?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "80% of bugs come from 20% of features"
                        },
                        {
                            "key":  "B",
                            "label":  "50% of users generate 50% of revenue"
                        },
                        {
                            "key":  "C",
                            "label":  "All features are equally important"
                        },
                        {
                            "key":  "D",
                            "label":  "Every bug must be fixed"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'80% of bugs come from 20% of features' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  136,
        "question":  "True or False: A \"canary release\" deploys the new version to all users at once.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  137,
        "question":  "What is the primary purpose of \"user story mapping\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "To assign story points"
                        },
                        {
                            "key":  "B",
                            "label":  "To visualize the user journey and prioritize releases"
                        },
                        {
                            "key":  "C",
                            "label":  "To replace the PRD"
                        },
                        {
                            "key":  "D",
                            "label":  "To estimate server costs"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'To visualize the user journey and prioritize releases' captures the core intent. Anchoring on this purpose keeps the team focused on outcomes instead of incidental side-effects of the practice."
    },
    {
        "id":  138,
        "question":  "Which of the following is a \"funnel metric\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Total registered users"
                        },
                        {
                            "key":  "B",
                            "label":  "Conversion rate from signup to activation"
                        },
                        {
                            "key":  "C",
                            "label":  "Monthly server uptime"
                        },
                        {
                            "key":  "D",
                            "label":  "Number of employees"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Conversion rate from signup to activation' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  139,
        "question":  "True or False: \"Smoke testing\" verifies the most critical functions work before deep testing.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  140,
        "question":  "What does \"CI/CD\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Continuous Integration / Continuous Deployment"
                        },
                        {
                            "key":  "B",
                            "label":  "Code Integration / Code Delivery"
                        },
                        {
                            "key":  "C",
                            "label":  "Customer Insight / Customer Data"
                        },
                        {
                            "key":  "D",
                            "label":  "Centralized Interface / Centralized Database"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Continuous Integration / Continuous Deployment' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  141,
        "question":  "Which of the following is a \"product-led growth\" (PLG) metric?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Number of sales calls"
                        },
                        {
                            "key":  "B",
                            "label":  "Time to value (TTV)"
                        },
                        {
                            "key":  "C",
                            "label":  "Annual contract value"
                        },
                        {
                            "key":  "D",
                            "label":  "Number of partners"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Time to value (TTV)' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  142,
        "question":  "True or False: A \"shadow IT\" system is one that is approved by the security team.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  143,
        "question":  "What does \"SSO\" stand for in enterprise software?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Single Sign-On"
                        },
                        {
                            "key":  "B",
                            "label":  "Secure Socket Option"
                        },
                        {
                            "key":  "C",
                            "label":  "Server Side Only"
                        },
                        {
                            "key":  "D",
                            "label":  "Simple System Output"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Single Sign-On' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  144,
        "question":  "Which of the following is a benefit of \"serverless architecture\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "No need to manage servers"
                        },
                        {
                            "key":  "B",
                            "label":  "Always free"
                        },
                        {
                            "key":  "C",
                            "label":  "No code changes required"
                        },
                        {
                            "key":  "D",
                            "label":  "Better for all workloads"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'No need to manage servers' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  145,
        "question":  "True or False: \"Schema migration\" changes the structure of a database.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  146,
        "question":  "What does \"idempotent\" mean in API design?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "The operation fails every time"
                        },
                        {
                            "key":  "B",
                            "label":  "Multiple identical requests have the same effect as one"
                        },
                        {
                            "key":  "C",
                            "label":  "The operation takes a long time"
                        },
                        {
                            "key":  "D",
                            "label":  "The operation requires authentication"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Multiple identical requests have the same effect as one' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  147,
        "question":  "Which of the following is a \"soft delete\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Permanently removing data"
                        },
                        {
                            "key":  "B",
                            "label":  "Marking data as deleted without erasing it"
                        },
                        {
                            "key":  "C",
                            "label":  "Deleting the database"
                        },
                        {
                            "key":  "D",
                            "label":  "Deleting only images"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Marking data as deleted without erasing it' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  148,
        "question":  "True or False: A \"webhook\" is a user-initiated API call.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  149,
        "question":  "What does \"orchestration\" mean in microservices?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Playing music"
                        },
                        {
                            "key":  "B",
                            "label":  "Coordinating multiple services to complete a workflow"
                        },
                        {
                            "key":  "C",
                            "label":  "Writing a single large function"
                        },
                        {
                            "key":  "D",
                            "label":  "Deleting unused services"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Coordinating multiple services to complete a workflow' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  150,
        "question":  "Which of the following is a \"data warehouse\" example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "MongoDB"
                        },
                        {
                            "key":  "B",
                            "label":  "Snowflake"
                        },
                        {
                            "key":  "C",
                            "label":  "Redis"
                        },
                        {
                            "key":  "D",
                            "label":  "Elasticsearch"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Snowflake' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  151,
        "question":  "True or False: \"ETL\" stands for Extract, Transform, Load.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  152,
        "question":  "What does \"latency\" measure in system performance?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Time to first byte"
                        },
                        {
                            "key":  "B",
                            "label":  "Number of users"
                        },
                        {
                            "key":  "C",
                            "label":  "Storage size"
                        },
                        {
                            "key":  "D",
                            "label":  "Network bandwidth"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Time to first byte' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  153,
        "question":  "Which of the following is a \"cache\" hit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Data found in temporary storage"
                        },
                        {
                            "key":  "B",
                            "label":  "Data not found and fetched from source"
                        },
                        {
                            "key":  "C",
                            "label":  "Database crash"
                        },
                        {
                            "key":  "D",
                            "label":  "Network timeout"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Data found in temporary storage' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  154,
        "question":  "True or False: \"Database index\" speeds up read operations at the cost of write speed.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  155,
        "question":  "What does \"JWT\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Java Web Toolkit"
                        },
                        {
                            "key":  "B",
                            "label":  "JSON Web Token"
                        },
                        {
                            "key":  "C",
                            "label":  "JavaScript Window Type"
                        },
                        {
                            "key":  "D",
                            "label":  "Joint Workflow Test"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'JSON Web Token' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  156,
        "question":  "Which of the following is a \"third-party cookie\" used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Cross-site tracking"
                        },
                        {
                            "key":  "B",
                            "label":  "Server authentication"
                        },
                        {
                            "key":  "C",
                            "label":  "Local storage"
                        },
                        {
                            "key":  "D",
                            "label":  "Session management"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Cross-site tracking' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  157,
        "question":  "True or False: \"OAuth\" is an authentication protocol.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  158,
        "question":  "What does \"CORS\" error indicate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Missing authentication"
                        },
                        {
                            "key":  "B",
                            "label":  "Cross-origin request blocked"
                        },
                        {
                            "key":  "C",
                            "label":  "Database connection failed"
                        },
                        {
                            "key":  "D",
                            "label":  "Invalid SSL certificate"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Cross-origin request blocked' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  159,
        "question":  "Which of the following is a \"static site generator\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "WordPress"
                        },
                        {
                            "key":  "B",
                            "label":  "Next.js (SSG mode)"
                        },
                        {
                            "key":  "C",
                            "label":  "React"
                        },
                        {
                            "key":  "D",
                            "label":  "Angular"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Next.js (SSG mode)' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  160,
        "question":  "True or False: \"Responsive design\" means the app works on different screen sizes.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  161,
        "question":  "What does \"WCAG\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Web Content Accessibility Guidelines"
                        },
                        {
                            "key":  "B",
                            "label":  "World Code Architecture Group"
                        },
                        {
                            "key":  "C",
                            "label":  "Web Component API Gateway"
                        },
                        {
                            "key":  "D",
                            "label":  "Wireless Communication and Graphics"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Web Content Accessibility Guidelines' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  162,
        "question":  "Which of the following is a \"progressive web app\" (PWA) feature?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Works offline"
                        },
                        {
                            "key":  "B",
                            "label":  "Requires app store installation"
                        },
                        {
                            "key":  "C",
                            "label":  "Only for iOS"
                        },
                        {
                            "key":  "D",
                            "label":  "Uses Flash"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Works offline' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  163,
        "question":  "True or False: \"Tree shaking\" removes unused code from JavaScript bundles.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  164,
        "question":  "What does \"SSR\" stand for in web development?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Server-Side Rendering"
                        },
                        {
                            "key":  "B",
                            "label":  "Single Source of Revenue"
                        },
                        {
                            "key":  "C",
                            "label":  "Secure Socket Relay"
                        },
                        {
                            "key":  "D",
                            "label":  "System Status Report"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Server-Side Rendering' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  165,
        "question":  "Which of the following is a \"headless CMS\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "WordPress (headless mode)"
                        },
                        {
                            "key":  "B",
                            "label":  "Wix"
                        },
                        {
                            "key":  "C",
                            "label":  "Squarespace"
                        },
                        {
                            "key":  "D",
                            "label":  "Webflow"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'WordPress (headless mode)' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  166,
        "question":  "True or False: \"GraphQL\" allows clients to request specific fields.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  167,
        "question":  "What does \"WebSocket\" enable?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Two-way real-time communication"
                        },
                        {
                            "key":  "B",
                            "label":  "One-way API calls"
                        },
                        {
                            "key":  "C",
                            "label":  "File uploads"
                        },
                        {
                            "key":  "D",
                            "label":  "Batch processing"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Two-way real-time communication' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  168,
        "question":  "Which of the following is a \"no-code\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Visual Studio Code"
                        },
                        {
                            "key":  "B",
                            "label":  "Bubble"
                        },
                        {
                            "key":  "C",
                            "label":  "Git"
                        },
                        {
                            "key":  "D",
                            "label":  "Docker"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Bubble' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  169,
        "question":  "True or False: \"Zapier\" connects apps without writing code.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  170,
        "question":  "What does \"RPA\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Robotic Process Automation"
                        },
                        {
                            "key":  "B",
                            "label":  "Rapid Product Analysis"
                        },
                        {
                            "key":  "C",
                            "label":  "Remote Procedure Access"
                        },
                        {
                            "key":  "D",
                            "label":  "Recursive Parsing Algorithm"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Robotic Process Automation' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  171,
        "question":  "Which of the following is a \"low-code\" platform?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "OutSystems"
                        },
                        {
                            "key":  "B",
                            "label":  "Java"
                        },
                        {
                            "key":  "C",
                            "label":  "C++"
                        },
                        {
                            "key":  "D",
                            "label":  "Assembly"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'OutSystems' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  172,
        "question":  "True or False: \"Workflow automation\" reduces manual repetitive tasks.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  173,
        "question":  "What does \"OCR\" technology do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Converts images of text to machine-encoded text"
                        },
                        {
                            "key":  "B",
                            "label":  "Optimizes database queries"
                        },
                        {
                            "key":  "C",
                            "label":  "Controls robot arms"
                        },
                        {
                            "key":  "D",
                            "label":  "Compresses video files"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Converts images of text to machine-encoded text' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  174,
        "question":  "Which of the following is a \"chatbot\" evaluation metric?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Task completion rate"
                        },
                        {
                            "key":  "B",
                            "label":  "Lines of code"
                        },
                        {
                            "key":  "C",
                            "label":  "Server uptime"
                        },
                        {
                            "key":  "D",
                            "label":  "Database size"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Task completion rate' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  175,
        "question":  "True or False: \"NLU\" is a subset of NLP that focuses on understanding meaning.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  176,
        "question":  "What does \"LLM\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Large Language Model"
                        },
                        {
                            "key":  "B",
                            "label":  "Low Level Machine"
                        },
                        {
                            "key":  "C",
                            "label":  "Logical Loop Manager"
                        },
                        {
                            "key":  "D",
                            "label":  "Linear Logic Matrix"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Large Language Model' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  177,
        "question":  "Which of the following is an example of \"generative AI\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Spam filter"
                        },
                        {
                            "key":  "B",
                            "label":  "Image classifier"
                        },
                        {
                            "key":  "C",
                            "label":  "ChatGPT"
                        },
                        {
                            "key":  "D",
                            "label":  "Recommendation system"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'ChatGPT' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  178,
        "question":  "True or False: \"Fine-tuning\" adapts a pre-trained model to a specific task.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  179,
        "question":  "What does \"prompt engineering\" involve?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Designing electrical circuits"
                        },
                        {
                            "key":  "B",
                            "label":  "Crafting inputs to get desired outputs from AI"
                        },
                        {
                            "key":  "C",
                            "label":  "Writing database queries"
                        },
                        {
                            "key":  "D",
                            "label":  "Building hardware"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Crafting inputs to get desired outputs from AI' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  180,
        "question":  "Which of the following is a \"vector database\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "PostgreSQL"
                        },
                        {
                            "key":  "B",
                            "label":  "MySQL"
                        },
                        {
                            "key":  "C",
                            "label":  "Pinecone"
                        },
                        {
                            "key":  "D",
                            "label":  "MongoDB"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Pinecone' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  181,
        "question":  "True or False: \"Embeddings\" represent text as numerical vectors.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  182,
        "question":  "What does \"hallucination\" mean in LLMs?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "The model sees things that aren't there"
                        },
                        {
                            "key":  "B",
                            "label":  "The model generates false information confidently"
                        },
                        {
                            "key":  "C",
                            "label":  "The model refuses to answer"
                        },
                        {
                            "key":  "D",
                            "label":  "The model runs out of memory"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'The model generates false information confidently' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  183,
        "question":  "Which of the following is a \"guardrail\" in AI products?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A physical barrier"
                        },
                        {
                            "key":  "B",
                            "label":  "Rules that limit model outputs for safety"
                        },
                        {
                            "key":  "C",
                            "label":  "A type of database index"
                        },
                        {
                            "key":  "D",
                            "label":  "A testing framework"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Rules that limit model outputs for safety' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  184,
        "question":  "True or False: \"Reinforcement learning from human feedback\" (RLHF) improves model alignment.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  185,
        "question":  "What does \"zero-shot learning\" allow an AI to do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Learn without any training data"
                        },
                        {
                            "key":  "B",
                            "label":  "Perform tasks it wasn't explicitly trained on"
                        },
                        {
                            "key":  "C",
                            "label":  "Require zero compute"
                        },
                        {
                            "key":  "D",
                            "label":  "Only work on zeros"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Perform tasks it wasn't explicitly trained on' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  186,
        "question":  "Which of the following is a \"responsible AI\" principle?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Maximize profit at any cost"
                        },
                        {
                            "key":  "B",
                            "label":  "Transparency"
                        },
                        {
                            "key":  "C",
                            "label":  "Speed over accuracy"
                        },
                        {
                            "key":  "D",
                            "label":  "Closed source only"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Transparency' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  187,
        "question":  "True or False: \"Bias in AI\" can lead to unfair outcomes.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  188,
        "question":  "What does \"GDPR\" require for AI using personal data?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Explicit consent"
                        },
                        {
                            "key":  "B",
                            "label":  "No restrictions"
                        },
                        {
                            "key":  "C",
                            "label":  "Open source code"
                        },
                        {
                            "key":  "D",
                            "label":  "Monthly audits"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Explicit consent' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  189,
        "question":  "Which of the following is a \"synthetic data\" benefit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Privacy preservation"
                        },
                        {
                            "key":  "B",
                            "label":  "Always 100% accurate"
                        },
                        {
                            "key":  "C",
                            "label":  "No need for real data ever"
                        },
                        {
                            "key":  "D",
                            "label":  "Faster training only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Privacy preservation' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  190,
        "question":  "True or False: \"Explainable AI\" (XAI) helps understand why a model made a decision.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  191,
        "question":  "What does \"model drift\" refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Physical movement of servers"
                        },
                        {
                            "key":  "B",
                            "label":  "Decrease in model performance over time due to data changes"
                        },
                        {
                            "key":  "C",
                            "label":  "Coding error in model training"
                        },
                        {
                            "key":  "D",
                            "label":  "Hardware failure"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Decrease in model performance over time due to data changes' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  192,
        "question":  "Which of the following is a \"feature store\" used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Storing raw data"
                        },
                        {
                            "key":  "B",
                            "label":  "Reusing feature pipelines across models"
                        },
                        {
                            "key":  "C",
                            "label":  "Serving web pages"
                        },
                        {
                            "key":  "D",
                            "label":  "Managing user sessions"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Reusing feature pipelines across models' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  193,
        "question":  "True or False: \"A/B testing\" is also known as split testing.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  194,
        "question":  "What does \"multivariate testing\" test?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Multiple variables simultaneously"
                        },
                        {
                            "key":  "B",
                            "label":  "Single variable only"
                        },
                        {
                            "key":  "C",
                            "label":  "User sentiment"
                        },
                        {
                            "key":  "D",
                            "label":  "Server capacity"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Multiple variables simultaneously' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  195,
        "question":  "Which of the following is a \"control group\" in an experiment?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Group that receives the new treatment"
                        },
                        {
                            "key":  "B",
                            "label":  "Group that receives no treatment or existing version"
                        },
                        {
                            "key":  "C",
                            "label":  "Group that chooses their own treatment"
                        },
                        {
                            "key":  "D",
                            "label":  "Group that is excluded from analysis"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Group that receives no treatment or existing version' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  196,
        "question":  "True or False: \"Statistical significance\" means the result is practically important.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  197,
        "question":  "What does \"confidence interval\" represent?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "The range where the true effect likely lies"
                        },
                        {
                            "key":  "B",
                            "label":  "The probability the test is wrong"
                        },
                        {
                            "key":  "C",
                            "label":  "The sample size needed"
                        },
                        {
                            "key":  "D",
                            "label":  "The cost of the experiment"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'The range where the true effect likely lies' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  198,
        "question":  "Which of the following is a \"novelty effect\" in A/B testing?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Users behave differently because the feature is new"
                        },
                        {
                            "key":  "B",
                            "label":  "The test has no effect"
                        },
                        {
                            "key":  "C",
                            "label":  "Users ignore the feature"
                        },
                        {
                            "key":  "D",
                            "label":  "The feature is buggy"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Users behave differently because the feature is new' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  199,
        "question":  "True or False: \"Segmentation\" in analytics means breaking data into subgroups.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  200,
        "question":  "What does \"cohort analysis\" help understand?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "User retention over time"
                        },
                        {
                            "key":  "B",
                            "label":  "Real-time server load"
                        },
                        {
                            "key":  "C",
                            "label":  "Code quality"
                        },
                        {
                            "key":  "D",
                            "label":  "Marketing spend"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'User retention over time' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  201,
        "question":  "Which of the following is a \"funnel analysis\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Amplitude"
                        },
                        {
                            "key":  "B",
                            "label":  "GitHub"
                        },
                        {
                            "key":  "C",
                            "label":  "Jenkins"
                        },
                        {
                            "key":  "D",
                            "label":  "Docker"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Amplitude' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  202,
        "question":  "True or False: \"Event tracking\" captures user interactions in a product.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  203,
        "question":  "What does \"user journey\" map visualize?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Code deployment steps"
                        },
                        {
                            "key":  "B",
                            "label":  "Steps a user takes to accomplish a goal"
                        },
                        {
                            "key":  "C",
                            "label":  "Server architecture"
                        },
                        {
                            "key":  "D",
                            "label":  "Team org chart"
                        }
                    ],
        "correct":  "B",
        "points":  1,
        "explanation":  "'Steps a user takes to accomplish a goal' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  204,
        "question":  "Which of the following is a \"service blueprint\" include?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Frontstage and backstage actions"
                        },
                        {
                            "key":  "B",
                            "label":  "Only user actions"
                        },
                        {
                            "key":  "C",
                            "label":  "Only technical details"
                        },
                        {
                            "key":  "D",
                            "label":  "Only financial data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Frontstage and backstage actions' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  205,
        "question":  "True or False: \"Heuristic evaluation\" is a usability inspection method.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  206,
        "question":  "What does \"System Usability Scale\" (SUS) measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Perceived usability"
                        },
                        {
                            "key":  "B",
                            "label":  "Code quality"
                        },
                        {
                            "key":  "C",
                            "label":  "Server speed"
                        },
                        {
                            "key":  "D",
                            "label":  "Team morale"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Perceived usability' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  207,
        "question":  "Which of the following is a \"card sorting\" exercise used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Information architecture"
                        },
                        {
                            "key":  "B",
                            "label":  "Pricing strategy"
                        },
                        {
                            "key":  "C",
                            "label":  "Team building"
                        },
                        {
                            "key":  "D",
                            "label":  "Code review"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Information architecture' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  208,
        "question":  "True or False: \"Tree testing\" validates the findability of items in a menu.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  209,
        "question":  "What does \"first-click testing\" measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Time to first click and whether it's correct"
                        },
                        {
                            "key":  "B",
                            "label":  "Number of clicks overall"
                        },
                        {
                            "key":  "C",
                            "label":  "User satisfaction after task"
                        },
                        {
                            "key":  "D",
                            "label":  "Eye movement"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Time to first click and whether it's correct' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  210,
        "question":  "Which of the following is a \"5-second test\" used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Measuring first impression"
                        },
                        {
                            "key":  "B",
                            "label":  "Testing load time"
                        },
                        {
                            "key":  "C",
                            "label":  "Checking API response"
                        },
                        {
                            "key":  "D",
                            "label":  "Validating login"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Measuring first impression' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  211,
        "question":  "True or False: \"Preference test\" asks users which design they like more.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  212,
        "question":  "What does \"eye tracking\" reveal?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Where users look on a screen"
                        },
                        {
                            "key":  "B",
                            "label":  "What users type"
                        },
                        {
                            "key":  "C",
                            "label":  "How fast they scroll"
                        },
                        {
                            "key":  "D",
                            "label":  "Which device they use"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Where users look on a screen' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  213,
        "question":  "Which of the following is a \"clickstream analysis\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Tracking every click a user makes"
                        },
                        {
                            "key":  "B",
                            "label":  "Counting total page views"
                        },
                        {
                            "key":  "C",
                            "label":  "Measuring server logs"
                        },
                        {
                            "key":  "D",
                            "label":  "Analyzing database queries"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Tracking every click a user makes' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  214,
        "question":  "True or False: \"Heatmap\" shows where users click or hover most.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  215,
        "question":  "What does \"scroll map\" indicate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How far down the page users scroll"
                        },
                        {
                            "key":  "B",
                            "label":  "Where users click"
                        },
                        {
                            "key":  "C",
                            "label":  "Mouse movement speed"
                        },
                        {
                            "key":  "D",
                            "label":  "Network latency"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'How far down the page users scroll' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  216,
        "question":  "Which of the following is a \"rage click\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A click that occurs many times in frustration"
                        },
                        {
                            "key":  "B",
                            "label":  "A click that buys something"
                        },
                        {
                            "key":  "C",
                            "label":  "A double-click"
                        },
                        {
                            "key":  "D",
                            "label":  "A right-click"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'A click that occurs many times in frustration' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  217,
        "question":  "True or False: \"User session recording\" captures video of user interactions.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  218,
        "question":  "What does \"customer effort score\" (CES) measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How easy it was to use the product"
                        },
                        {
                            "key":  "B",
                            "label":  "How much money was spent"
                        },
                        {
                            "key":  "C",
                            "label":  "How many features were used"
                        },
                        {
                            "key":  "D",
                            "label":  "How long the session lasted"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'How easy it was to use the product' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  219,
        "question":  "Which of the following is a \"qualitative\" metric?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "User sentiment from interviews"
                        },
                        {
                            "key":  "B",
                            "label":  "Conversion rate"
                        },
                        {
                            "key":  "C",
                            "label":  "Retention rate"
                        },
                        {
                            "key":  "D",
                            "label":  "Average revenue per user"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'User sentiment from interviews' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  220,
        "question":  "True or False: \"Sentiment analysis\" can be applied to customer support tickets.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  221,
        "question":  "What does \"churn reason survey\" help identify?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Why users leave"
                        },
                        {
                            "key":  "B",
                            "label":  "Why users sign up"
                        },
                        {
                            "key":  "C",
                            "label":  "Server uptime"
                        },
                        {
                            "key":  "D",
                            "label":  "Code quality"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Why users leave' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  222,
        "question":  "Which of the following is a \"win-back\" campaign?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Targeting churned users"
                        },
                        {
                            "key":  "B",
                            "label":  "Targeting new users"
                        },
                        {
                            "key":  "C",
                            "label":  "Targeting active users"
                        },
                        {
                            "key":  "D",
                            "label":  "Targeting employees"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Targeting churned users' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  223,
        "question":  "True or False: \"Customer lifetime value\" (LTV) predicts total profit from a customer.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  224,
        "question":  "What does \"payback period\" mean in SaaS?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Time to recover customer acquisition cost"
                        },
                        {
                            "key":  "B",
                            "label":  "Time to develop a feature"
                        },
                        {
                            "key":  "C",
                            "label":  "Time to respond to support ticket"
                        },
                        {
                            "key":  "D",
                            "label":  "Time to deploy code"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Time to recover customer acquisition cost' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  225,
        "question":  "Which of the following is a \"viral coefficient\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Number of new users invited per existing user"
                        },
                        {
                            "key":  "B",
                            "label":  "Number of bugs per release"
                        },
                        {
                            "key":  "C",
                            "label":  "Server response time"
                        },
                        {
                            "key":  "D",
                            "label":  "Employee satisfaction"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Number of new users invited per existing user' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  226,
        "question":  "True or False: \"K-factor\" measures viral growth.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  227,
        "question":  "What does \"burn rate\" indicate for a startup?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How fast cash is spent"
                        },
                        {
                            "key":  "B",
                            "label":  "How fast code is written"
                        },
                        {
                            "key":  "C",
                            "label":  "How fast users join"
                        },
                        {
                            "key":  "D",
                            "label":  "How fast servers fail"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'How fast cash is spent' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  228,
        "question":  "Which of the following is a \"runway\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Months until cash runs out"
                        },
                        {
                            "key":  "B",
                            "label":  "Length of the office hallway"
                        },
                        {
                            "key":  "C",
                            "label":  "Number of features planned"
                        },
                        {
                            "key":  "D",
                            "label":  "Time to deploy"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Months until cash runs out' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  229,
        "question":  "True or False: \"Gross margin\" is revenue minus cost of goods sold.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  230,
        "question":  "What does \"annual recurring revenue\" (ARR) measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Subscription revenue normalized per year"
                        },
                        {
                            "key":  "B",
                            "label":  "One-time sales"
                        },
                        {
                            "key":  "C",
                            "label":  "Ad revenue only"
                        },
                        {
                            "key":  "D",
                            "label":  "Hardware sales"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Subscription revenue normalized per year' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  231,
        "question":  "Which of the following is a \"leading indicator\" for SaaS?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Number of trial signups"
                        },
                        {
                            "key":  "B",
                            "label":  "Quarterly revenue"
                        },
                        {
                            "key":  "C",
                            "label":  "Churn rate"
                        },
                        {
                            "key":  "D",
                            "label":  "Customer support tickets"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Number of trial signups' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  232,
        "question":  "True or False: \"CAC\" stands for Customer Acquisition Cost.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  233,
        "question":  "What does \"LTV/CAC ratio\" indicate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Business model health"
                        },
                        {
                            "key":  "B",
                            "label":  "Server performance"
                        },
                        {
                            "key":  "C",
                            "label":  "Code quality"
                        },
                        {
                            "key":  "D",
                            "label":  "Team happiness"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Business model health' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  234,
        "question":  "Which of the following is a \"good\" LTV/CAC ratio?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "3:1"
                        },
                        {
                            "key":  "B",
                            "label":  "1:1"
                        },
                        {
                            "key":  "C",
                            "label":  "0.5:1"
                        },
                        {
                            "key":  "D",
                            "label":  "10:1"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'3:1' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  235,
        "question":  "True or False: \"Magic number\" (SaaS) measures sales efficiency.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  236,
        "question":  "What does \"quick ratio\" (SaaS) measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Revenue churn vs. expansion"
                        },
                        {
                            "key":  "B",
                            "label":  "Server uptime"
                        },
                        {
                            "key":  "C",
                            "label":  "Code deployment frequency"
                        },
                        {
                            "key":  "D",
                            "label":  "User login rate"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Revenue churn vs. expansion' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  237,
        "question":  "Which of the following is a \"negative churn\" scenario?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Expansion revenue > churned revenue"
                        },
                        {
                            "key":  "B",
                            "label":  "Churned revenue > new revenue"
                        },
                        {
                            "key":  "C",
                            "label":  "No churn"
                        },
                        {
                            "key":  "D",
                            "label":  "High refunds"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Expansion revenue > churned revenue' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  238,
        "question":  "True or False: \"Net Revenue Retention\" (NRR) above 100% is good.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  239,
        "question":  "What does \"gross revenue retention\" (GRR) exclude?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Upgrades and cross-sells"
                        },
                        {
                            "key":  "B",
                            "label":  "Downgrades"
                        },
                        {
                            "key":  "C",
                            "label":  "Cancellations"
                        },
                        {
                            "key":  "D",
                            "label":  "Refunds"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Upgrades and cross-sells' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  240,
        "question":  "Which of the following is a \"usage-based\" pricing metric?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "API calls per month"
                        },
                        {
                            "key":  "B",
                            "label":  "Seat licenses"
                        },
                        {
                            "key":  "C",
                            "label":  "Flat monthly fee"
                        },
                        {
                            "key":  "D",
                            "label":  "Annual contract"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'API calls per month' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  241,
        "question":  "True or False: \"Freemium\" models always convert well.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  242,
        "question":  "What does \"tiered pricing\" offer?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Different feature sets at different prices"
                        },
                        {
                            "key":  "B",
                            "label":  "One price for everyone"
                        },
                        {
                            "key":  "C",
                            "label":  "Custom pricing per customer"
                        },
                        {
                            "key":  "D",
                            "label":  "Free only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Different feature sets at different prices' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  243,
        "question":  "Which of the following is a \"value metric\" for pricing?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Per transaction"
                        },
                        {
                            "key":  "B",
                            "label":  "Per employee"
                        },
                        {
                            "key":  "C",
                            "label":  "Per GB storage"
                        },
                        {
                            "key":  "D",
                            "label":  "All of the above"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "'All of the above' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  244,
        "question":  "True or False: \"Price anchoring\" influences perceived value.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  245,
        "question":  "What does \"willingness to pay\" (WTP) survey measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Maximum price a customer would pay"
                        },
                        {
                            "key":  "B",
                            "label":  "Minimum price a company accepts"
                        },
                        {
                            "key":  "C",
                            "label":  "Competitor pricing"
                        },
                        {
                            "key":  "D",
                            "label":  "Cost of goods"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Maximum price a customer would pay' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  246,
        "question":  "Which of the following is a \"competitive pricing\" strategy?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Match competitors' prices"
                        },
                        {
                            "key":  "B",
                            "label":  "Price below cost"
                        },
                        {
                            "key":  "C",
                            "label":  "Price based on value only"
                        },
                        {
                            "key":  "D",
                            "label":  "Free forever"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Match competitors' prices' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  247,
        "question":  "True or False: \"Dynamic pricing\" changes based on demand.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  248,
        "question":  "What does \"price elasticity\" measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Demand sensitivity to price changes"
                        },
                        {
                            "key":  "B",
                            "label":  "Supply chain cost"
                        },
                        {
                            "key":  "C",
                            "label":  "Marketing ROI"
                        },
                        {
                            "key":  "D",
                            "label":  "Feature usage"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Demand sensitivity to price changes' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  249,
        "question":  "Which of the following is a \"decoy effect\" example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Adding a less attractive option to make another look better"
                        },
                        {
                            "key":  "B",
                            "label":  "Removing all options"
                        },
                        {
                            "key":  "C",
                            "label":  "Offering only one option"
                        },
                        {
                            "key":  "D",
                            "label":  "Free trial only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Adding a less attractive option to make another look better' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  250,
        "question":  "True or False: \"Bundling\" can increase perceived value.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  251,
        "question":  "What does \"cost-plus pricing\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Adds a markup to production cost"
                        },
                        {
                            "key":  "B",
                            "label":  "Matches competitor price"
                        },
                        {
                            "key":  "C",
                            "label":  "Sets price based on customer value"
                        },
                        {
                            "key":  "D",
                            "label":  "Gives product away for free"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Adds a markup to production cost' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  252,
        "question":  "Which of the following is a \"loss leader\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Sell a product at a loss to attract customers"
                        },
                        {
                            "key":  "B",
                            "label":  "Most profitable product"
                        },
                        {
                            "key":  "C",
                            "label":  "Expensive luxury item"
                        },
                        {
                            "key":  "D",
                            "label":  "Out-of-stock item"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Sell a product at a loss to attract customers' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  253,
        "question":  "True or False: \"Penetration pricing\" sets a low initial price to gain market share.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  254,
        "question":  "What does \"skimming pricing\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Sets high initial price, then lowers"
                        },
                        {
                            "key":  "B",
                            "label":  "Sets low price forever"
                        },
                        {
                            "key":  "C",
                            "label":  "Matches competition"
                        },
                        {
                            "key":  "D",
                            "label":  "Free trial then paid"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Sets high initial price, then lowers' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  255,
        "question":  "Which of the following is a \"psychological pricing\" tactic?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "$9.99 instead of $10"
                        },
                        {
                            "key":  "B",
                            "label":  "$10.00 exactly"
                        },
                        {
                            "key":  "C",
                            "label":  "Round numbers only"
                        },
                        {
                            "key":  "D",
                            "label":  "Free shipping only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'$9.99 instead of $10' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  256,
        "question":  "True or False: \"Price discrimination\" charges different prices to different segments.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  257,
        "question":  "What does \"versioning\" mean in product pricing?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Offering multiple editions at different prices"
                        },
                        {
                            "key":  "B",
                            "label":  "Releasing updates"
                        },
                        {
                            "key":  "C",
                            "label":  "Changing logo"
                        },
                        {
                            "key":  "D",
                            "label":  "Renaming the product"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Offering multiple editions at different prices' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  258,
        "question":  "Which of the following is a \"product line pricing\" consideration?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Setting prices across related products"
                        },
                        {
                            "key":  "B",
                            "label":  "Setting a single product price"
                        },
                        {
                            "key":  "C",
                            "label":  "Ignoring competitors"
                        },
                        {
                            "key":  "D",
                            "label":  "Only cost-based"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Setting prices across related products' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  259,
        "question":  "True or False: \"Subscription fatigue\" occurs when users have too many subscriptions.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  260,
        "question":  "What does \"unbundling\" refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Selling features separately"
                        },
                        {
                            "key":  "B",
                            "label":  "Combining products"
                        },
                        {
                            "key":  "C",
                            "label":  "Increasing price"
                        },
                        {
                            "key":  "D",
                            "label":  "Removing a product"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Selling features separately' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  261,
        "question":  "Which of the following is a \"value-based pricing\" input?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Customer perceived value"
                        },
                        {
                            "key":  "B",
                            "label":  "Production cost"
                        },
                        {
                            "key":  "C",
                            "label":  "Competitor price"
                        },
                        {
                            "key":  "D",
                            "label":  "Historical price"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Customer perceived value' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  262,
        "question":  "True or False: \"Van Westendorp\" model finds acceptable price range.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  263,
        "question":  "What does \"Gabor-Granger\" method ask?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Price point purchase intention"
                        },
                        {
                            "key":  "B",
                            "label":  "Feature preference"
                        },
                        {
                            "key":  "C",
                            "label":  "Brand recall"
                        },
                        {
                            "key":  "D",
                            "label":  "Usage frequency"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Price point purchase intention' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  264,
        "question":  "Which of the following is a \"conjoint analysis\" output?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Part-worth utilities for features"
                        },
                        {
                            "key":  "B",
                            "label":  "Total revenue"
                        },
                        {
                            "key":  "C",
                            "label":  "Server load"
                        },
                        {
                            "key":  "D",
                            "label":  "User age"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Part-worth utilities for features' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  265,
        "question":  "True or False: \"MaxDiff\" analysis identifies most and least important features.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  266,
        "question":  "What does \"TURF\" analysis stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Total Unduplicated Reach and Frequency"
                        },
                        {
                            "key":  "B",
                            "label":  "Total User Revenue Formula"
                        },
                        {
                            "key":  "C",
                            "label":  "Technical Unified Reporting Framework"
                        },
                        {
                            "key":  "D",
                            "label":  "Test Unit Response Function"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Total Unduplicated Reach and Frequency' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  267,
        "question":  "Which of the following is a \"market sizing\" method?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Top-down"
                        },
                        {
                            "key":  "B",
                            "label":  "Bottom-up"
                        },
                        {
                            "key":  "C",
                            "label":  "Value theory"
                        },
                        {
                            "key":  "D",
                            "label":  "All of the above"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "'All of the above' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  268,
        "question":  "True or False: \"TAM\" stands for Total Addressable Market.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  269,
        "question":  "What does \"SAM\" represent?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Serviceable Available Market"
                        },
                        {
                            "key":  "B",
                            "label":  "Software Asset Management"
                        },
                        {
                            "key":  "C",
                            "label":  "System Access Module"
                        },
                        {
                            "key":  "D",
                            "label":  "Sales and Marketing"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Serviceable Available Market' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  270,
        "question":  "Which of the following is \"SOM\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Serviceable Obtainable Market"
                        },
                        {
                            "key":  "B",
                            "label":  "System on Module"
                        },
                        {
                            "key":  "C",
                            "label":  "Start of Message"
                        },
                        {
                            "key":  "D",
                            "label":  "Standard Operating Model"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Serviceable Obtainable Market' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  271,
        "question":  "True or False: \"CAGR\" measures growth rate over time.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  272,
        "question":  "What does \"ROI\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Return on Investment"
                        },
                        {
                            "key":  "B",
                            "label":  "Rate of Interest"
                        },
                        {
                            "key":  "C",
                            "label":  "Revenue on Invoice"
                        },
                        {
                            "key":  "D",
                            "label":  "Run of Inventory"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Return on Investment' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  273,
        "question":  "Which of the following is a \"net present value\" (NPV) input?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Future cash flows"
                        },
                        {
                            "key":  "B",
                            "label":  "Past expenses"
                        },
                        {
                            "key":  "C",
                            "label":  "Employee salaries"
                        },
                        {
                            "key":  "D",
                            "label":  "Office rent"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Future cash flows' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  274,
        "question":  "True or False: \"Internal rate of return\" (IRR) is the discount rate that makes NPV zero.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  275,
        "question":  "What does \"payback period\" ignore?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Time value of money after payback"
                        },
                        {
                            "key":  "B",
                            "label":  "Initial investment"
                        },
                        {
                            "key":  "C",
                            "label":  "Cash flows during payback"
                        },
                        {
                            "key":  "D",
                            "label":  "Risk"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Time value of money after payback' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  276,
        "question":  "Which of the following is a \"moonshot\" project characteristic?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "High risk, high reward"
                        },
                        {
                            "key":  "B",
                            "label":  "Low risk, low reward"
                        },
                        {
                            "key":  "C",
                            "label":  "Incremental improvement"
                        },
                        {
                            "key":  "D",
                            "label":  "Cost-saving only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'High risk, high reward' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  277,
        "question":  "True or False: \"Innovation accounting\" measures progress in uncertain environments.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  278,
        "question":  "What does \"learning milestone\" mean in lean startup?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Validated learning about customers"
                        },
                        {
                            "key":  "B",
                            "label":  "Code deployment milestone"
                        },
                        {
                            "key":  "C",
                            "label":  "Marketing campaign end"
                        },
                        {
                            "key":  "D",
                            "label":  "Budget approval"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Validated learning about customers' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  279,
        "question":  "Which of the following is a \"pivot\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Changing strategy based on learning"
                        },
                        {
                            "key":  "B",
                            "label":  "Staying the course"
                        },
                        {
                            "key":  "C",
                            "label":  "Increasing budget"
                        },
                        {
                            "key":  "D",
                            "label":  "Hiring more engineers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Changing strategy based on learning' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  280,
        "question":  "True or False: \"Zoom-in pivot\" means focusing on a single feature of the product.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  281,
        "question":  "What does \"zoom-out pivot\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Expands the product to a broader solution"
                        },
                        {
                            "key":  "B",
                            "label":  "Reduces features"
                        },
                        {
                            "key":  "C",
                            "label":  "Changes pricing"
                        },
                        {
                            "key":  "D",
                            "label":  "Renames company"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Expands the product to a broader solution' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  282,
        "question":  "Which of the following is a \"customer segment pivot\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Targeting a different user group"
                        },
                        {
                            "key":  "B",
                            "label":  "Changing the technology"
                        },
                        {
                            "key":  "C",
                            "label":  "Changing revenue model"
                        },
                        {
                            "key":  "D",
                            "label":  "Changing distribution channel"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Targeting a different user group' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  283,
        "question":  "True or False: \"Business architecture pivot\" changes how value is delivered.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  284,
        "question":  "What does \"value capture pivot\" modify?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Revenue model"
                        },
                        {
                            "key":  "B",
                            "label":  "User interface"
                        },
                        {
                            "key":  "C",
                            "label":  "Codebase"
                        },
                        {
                            "key":  "D",
                            "label":  "Team structure"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Revenue model' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  285,
        "question":  "Which of the following is an \"engine of growth\" pivot?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Changing growth strategy (sticky, viral, paid)"
                        },
                        {
                            "key":  "B",
                            "label":  "Changing product name"
                        },
                        {
                            "key":  "C",
                            "label":  "Changing logo"
                        },
                        {
                            "key":  "D",
                            "label":  "Moving offices"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Changing growth strategy (sticky, viral, paid)' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  286,
        "question":  "True or False: \"Channel pivot\" changes the go-to-market approach.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  287,
        "question":  "What does \"technology pivot\" involve?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Using a different solution to deliver the same value"
                        },
                        {
                            "key":  "B",
                            "label":  "Changing the customer"
                        },
                        {
                            "key":  "C",
                            "label":  "Changing the price"
                        },
                        {
                            "key":  "D",
                            "label":  "Changing the brand"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Using a different solution to deliver the same value' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  288,
        "question":  "Which of the following is a \"platform pivot\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "From application to platform or vice versa"
                        },
                        {
                            "key":  "B",
                            "label":  "From web to mobile"
                        },
                        {
                            "key":  "C",
                            "label":  "From B2B to B2C"
                        },
                        {
                            "key":  "D",
                            "label":  "From subscription to one-time"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'From application to platform or vice versa' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  289,
        "question":  "True or False: \"Lean canvas\" is a one-page business model.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  290,
        "question":  "What does \"unique value proposition\" (UVP) describe?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Why a customer should buy from you"
                        },
                        {
                            "key":  "B",
                            "label":  "The company history"
                        },
                        {
                            "key":  "C",
                            "label":  "The employee benefits"
                        },
                        {
                            "key":  "D",
                            "label":  "The office location"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Why a customer should buy from you' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  291,
        "question":  "Which of the following is a \"unfair advantage\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Something competitors cannot easily copy"
                        },
                        {
                            "key":  "B",
                            "label":  "Low price"
                        },
                        {
                            "key":  "C",
                            "label":  "Good customer service"
                        },
                        {
                            "key":  "D",
                            "label":  "Fast shipping"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Something competitors cannot easily copy' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  292,
        "question":  "True or False: \"Problem-solution fit\" comes before product-market fit.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  293,
        "question":  "What does \"solution interview\" validate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "That your solution solves a real problem"
                        },
                        {
                            "key":  "B",
                            "label":  "The problem itself"
                        },
                        {
                            "key":  "C",
                            "label":  "The market size"
                        },
                        {
                            "key":  "D",
                            "label":  "The team skills"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'That your solution solves a real problem' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  294,
        "question":  "Which of the following is a \"problem interview\" outcome?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Understanding customer pain points"
                        },
                        {
                            "key":  "B",
                            "label":  "Prototype feedback"
                        },
                        {
                            "key":  "C",
                            "label":  "Pricing preference"
                        },
                        {
                            "key":  "D",
                            "label":  "Feature wishlist"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Understanding customer pain points' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  295,
        "question":  "True or False: \"Concierge MVP\" manually delivers the service.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  296,
        "question":  "What does \"piecemeal MVP\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Uses existing tools to simulate the product"
                        },
                        {
                            "key":  "B",
                            "label":  "Writes custom code"
                        },
                        {
                            "key":  "C",
                            "label":  "Builds everything from scratch"
                        },
                        {
                            "key":  "D",
                            "label":  "Hires a large team"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Uses existing tools to simulate the product' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  297,
        "question":  "Which of the following is a \"landing page MVP\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A page describing the product with a signup button"
                        },
                        {
                            "key":  "B",
                            "label":  "A fully functional app"
                        },
                        {
                            "key":  "C",
                            "label":  "A physical product"
                        },
                        {
                            "key":  "D",
                            "label":  "A patent application"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'A page describing the product with a signup button' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  298,
        "question":  "True or False: \"Fake door test\" measures intent without building the feature.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  299,
        "question":  "What does \"pre-order MVP\" validate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Demand before building"
                        },
                        {
                            "key":  "B",
                            "label":  "Supply chain"
                        },
                        {
                            "key":  "C",
                            "label":  "Team capacity"
                        },
                        {
                            "key":  "D",
                            "label":  "Investor interest"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Demand before building' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  300,
        "question":  "Which of the following is a \"crowdfunding campaign\" benefit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Validates demand and raises funds"
                        },
                        {
                            "key":  "B",
                            "label":  "No validation"
                        },
                        {
                            "key":  "C",
                            "label":  "Only raises funds"
                        },
                        {
                            "key":  "D",
                            "label":  "Only builds community"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Validates demand and raises funds' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  301,
        "question":  "True or False: \"Explainer video MVP\" communicates value before building.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  302,
        "question":  "What does \"single-feature MVP\" focus on?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "One core value proposition"
                        },
                        {
                            "key":  "B",
                            "label":  "All features"
                        },
                        {
                            "key":  "C",
                            "label":  "Only UI"
                        },
                        {
                            "key":  "D",
                            "label":  "Only backend"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'One core value proposition' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  303,
        "question":  "Which of the following is a \"blog MVP\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A blog describing the solution to attract early adopters"
                        },
                        {
                            "key":  "B",
                            "label":  "A full product"
                        },
                        {
                            "key":  "C",
                            "label":  "A mobile app"
                        },
                        {
                            "key":  "D",
                            "label":  "A patent"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'A blog describing the solution to attract early adopters' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  304,
        "question":  "True or False: \"Email MVP\" manually fulfills requests via email.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  305,
        "question":  "What does \"three-click rule\" suggest?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Users should find anything within three clicks"
                        },
                        {
                            "key":  "B",
                            "label":  "Only three features"
                        },
                        {
                            "key":  "C",
                            "label":  "Three developers"
                        },
                        {
                            "key":  "D",
                            "label":  "Three design iterations"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Users should find anything within three clicks' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  306,
        "question":  "Which of the following is a \"Fitts's law\" application?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Making buttons larger for easier clicking"
                        },
                        {
                            "key":  "B",
                            "label":  "Adding more colors"
                        },
                        {
                            "key":  "C",
                            "label":  "Increasing font size"
                        },
                        {
                            "key":  "D",
                            "label":  "Adding animations"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Making buttons larger for easier clicking' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  307,
        "question":  "True or False: \"Hick's law\" states more choices increase decision time.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  308,
        "question":  "What does \"Miller's law\" refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "7 ± 2 chunks in working memory"
                        },
                        {
                            "key":  "B",
                            "label":  "Magic number 3"
                        },
                        {
                            "key":  "C",
                            "label":  "10,000 hours rule"
                        },
                        {
                            "key":  "D",
                            "label":  "Pareto principle"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'7 ± 2 chunks in working memory' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  309,
        "question":  "Which of the following is a \"Tesler's law\" (law of conservation of complexity)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Each app has a fixed amount of complexity"
                        },
                        {
                            "key":  "B",
                            "label":  "Complexity grows forever"
                        },
                        {
                            "key":  "C",
                            "label":  "Users prefer complex things"
                        },
                        {
                            "key":  "D",
                            "label":  "Simplicity is always better"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Each app has a fixed amount of complexity' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  310,
        "question":  "True or False: \"Pareto principle\" (80/20) applies to feature usage.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  311,
        "question":  "What does \"Doherty threshold\" measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "System response time for productivity"
                        },
                        {
                            "key":  "B",
                            "label":  "User age"
                        },
                        {
                            "key":  "C",
                            "label":  "Code line count"
                        },
                        {
                            "key":  "D",
                            "label":  "Server temperature"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'System response time for productivity' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  312,
        "question":  "Which of the following is a \"Jakob's law\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Users prefer familiar patterns"
                        },
                        {
                            "key":  "B",
                            "label":  "Users always want new things"
                        },
                        {
                            "key":  "C",
                            "label":  "Design must be original"
                        },
                        {
                            "key":  "D",
                            "label":  "Mobile first"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Users prefer familiar patterns' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  313,
        "question":  "True or False: \"Aesthetic-Usability Effect\" means attractive things are perceived as easier to use.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  314,
        "question":  "What does \"Von Restorff effect\" state?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Isolated items are remembered best"
                        },
                        {
                            "key":  "B",
                            "label":  "All items are remembered equally"
                        },
                        {
                            "key":  "C",
                            "label":  "Users forget everything"
                        },
                        {
                            "key":  "D",
                            "label":  "Colors don't matter"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Isolated items are remembered best' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  315,
        "question":  "Which of the following is a \"serial position effect\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "First and last items are remembered best"
                        },
                        {
                            "key":  "B",
                            "label":  "Middle items are remembered best"
                        },
                        {
                            "key":  "C",
                            "label":  "Random order is best"
                        },
                        {
                            "key":  "D",
                            "label":  "Alphabetical order is best"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'First and last items are remembered best' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  316,
        "question":  "True or False: \"Peak-end rule\" judges experience by its peak and end.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  317,
        "question":  "What does \"cognitive load\" refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Mental effort required to use a product"
                        },
                        {
                            "key":  "B",
                            "label":  "Server processing power"
                        },
                        {
                            "key":  "C",
                            "label":  "Database memory"
                        },
                        {
                            "key":  "D",
                            "label":  "Network bandwidth"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Mental effort required to use a product' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  318,
        "question":  "Which of the following reduces cognitive load?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Consistent UI patterns"
                        },
                        {
                            "key":  "B",
                            "label":  "Random button placement"
                        },
                        {
                            "key":  "C",
                            "label":  "Many colors"
                        },
                        {
                            "key":  "D",
                            "label":  "Long paragraphs"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Consistent UI patterns' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  319,
        "question":  "True or False: \"Progressive disclosure\" shows only necessary information at each step.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  320,
        "question":  "What does \"affordance\" mean in design?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Clues about how an object can be used"
                        },
                        {
                            "key":  "B",
                            "label":  "The cost of a feature"
                        },
                        {
                            "key":  "C",
                            "label":  "The speed of interaction"
                        },
                        {
                            "key":  "D",
                            "label":  "The color scheme"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Clues about how an object can be used' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  321,
        "question":  "Which of the following is a \"signifier\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A label that indicates action"
                        },
                        {
                            "key":  "B",
                            "label":  "The actual usability"
                        },
                        {
                            "key":  "C",
                            "label":  "The code behind"
                        },
                        {
                            "key":  "D",
                            "label":  "The business model"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'A label that indicates action' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  322,
        "question":  "True or False: \"Feedback loop\" informs users of the result of an action.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  323,
        "question":  "What does \"constraint\" in design do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Limits possible actions to prevent errors"
                        },
                        {
                            "key":  "B",
                            "label":  "Adds more features"
                        },
                        {
                            "key":  "C",
                            "label":  "Increases complexity"
                        },
                        {
                            "key":  "D",
                            "label":  "Removes all options"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Limits possible actions to prevent errors' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  324,
        "question":  "Which of the following is a \"mapping\" principle?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Controls should relate to their effects"
                        },
                        {
                            "key":  "B",
                            "label":  "All buttons should be red"
                        },
                        {
                            "key":  "C",
                            "label":  "Use many colors"
                        },
                        {
                            "key":  "D",
                            "label":  "Random layout"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Controls should relate to their effects' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  325,
        "question":  "True or False: \"Consistency\" reduces learning time.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  326,
        "question":  "What does \"visibility\" of system status mean?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Users should know what's happening"
                        },
                        {
                            "key":  "B",
                            "label":  "Hide all status messages"
                        },
                        {
                            "key":  "C",
                            "label":  "Only show errors"
                        },
                        {
                            "key":  "D",
                            "label":  "Never show loading"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Users should know what's happening' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  327,
        "question":  "Which of the following is a \"match between system and real world\" example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Using familiar language and metaphors"
                        },
                        {
                            "key":  "B",
                            "label":  "Using technical jargon"
                        },
                        {
                            "key":  "C",
                            "label":  "Using random icons"
                        },
                        {
                            "key":  "D",
                            "label":  "Using only numbers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Using familiar language and metaphors' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  328,
        "question":  "True or False: \"User control and freedom\" means users need an undo\" option.\"",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  329,
        "question":  "What does \"error prevention\" design aim for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Stop errors before they happen"
                        },
                        {
                            "key":  "B",
                            "label":  "Fix errors after"
                        },
                        {
                            "key":  "C",
                            "label":  "Ignore errors"
                        },
                        {
                            "key":  "D",
                            "label":  "Blame the user"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Stop errors before they happen' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  330,
        "question":  "Which of the following is a \"recognition over recall\" example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Showing menu items rather than requiring typed commands"
                        },
                        {
                            "key":  "B",
                            "label":  "Asking users to remember a code"
                        },
                        {
                            "key":  "C",
                            "label":  "Using only keyboard shortcuts"
                        },
                        {
                            "key":  "D",
                            "label":  "No labels"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Showing menu items rather than requiring typed commands' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  331,
        "question":  "True or False: \"Flexibility and efficiency of use\" accommodates both novice and expert users.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  332,
        "question":  "What does \"aesthetic and minimalist design\" avoid?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Irrelevant information"
                        },
                        {
                            "key":  "B",
                            "label":  "White space"
                        },
                        {
                            "key":  "C",
                            "label":  "Clear fonts"
                        },
                        {
                            "key":  "D",
                            "label":  "Fast loading"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Irrelevant information' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  333,
        "question":  "Which of the following helps \"help users recognize, diagnose, and recover from errors\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Clear error messages in plain language"
                        },
                        {
                            "key":  "B",
                            "label":  "Error codes only"
                        },
                        {
                            "key":  "C",
                            "label":  "Silent failures"
                        },
                        {
                            "key":  "D",
                            "label":  "Popups with jargon"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Clear error messages in plain language' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  334,
        "question":  "True or False: \"Help and documentation\" should be easy to search.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  335,
        "question":  "What does \"dark pattern\" refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "UI designed to trick users"
                        },
                        {
                            "key":  "B",
                            "label":  "A color scheme"
                        },
                        {
                            "key":  "C",
                            "label":  "Low-contrast mode"
                        },
                        {
                            "key":  "D",
                            "label":  "Night mode"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'UI designed to trick users' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  336,
        "question":  "Which of the following is a \"roach motel\" pattern?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Easy to get in, hard to get out"
                        },
                        {
                            "key":  "B",
                            "label":  "Easy to cancel"
                        },
                        {
                            "key":  "C",
                            "label":  "Transparent pricing"
                        },
                        {
                            "key":  "D",
                            "label":  "Clear unsubscribe"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Easy to get in, hard to get out' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  337,
        "question":  "True or False: \"Confirmshaming\" uses guilt to prevent cancellation.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  338,
        "question":  "What does \"forced continuity\" mean?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Auto-renewal with difficult cancellation"
                        },
                        {
                            "key":  "B",
                            "label":  "One-time purchase"
                        },
                        {
                            "key":  "C",
                            "label":  "Free trial without card"
                        },
                        {
                            "key":  "D",
                            "label":  "Manual renewal"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Auto-renewal with difficult cancellation' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  339,
        "question":  "Which of the following is a \"hidden cost\" dark pattern?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Revealing extra charges at checkout"
                        },
                        {
                            "key":  "B",
                            "label":  "Free shipping"
                        },
                        {
                            "key":  "C",
                            "label":  "Clear price upfront"
                        },
                        {
                            "key":  "D",
                            "label":  "No tax"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Revealing extra charges at checkout' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  340,
        "question":  "True or False: \"Sneak into basket\" adds items without consent.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  341,
        "question":  "What does \"privacy zuckering\" trick users into?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Sharing more data than intended"
                        },
                        {
                            "key":  "B",
                            "label":  "Using a secure password"
                        },
                        {
                            "key":  "C",
                            "label":  "Logging out"
                        },
                        {
                            "key":  "D",
                            "label":  "Deleting account"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Sharing more data than intended' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  342,
        "question":  "Which of the following is a \"trick question\" dark pattern?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Confusing wording that leads to unintended choice"
                        },
                        {
                            "key":  "B",
                            "label":  "Clear yes/no"
                        },
                        {
                            "key":  "C",
                            "label":  "Simple checkbox"
                        },
                        {
                            "key":  "D",
                            "label":  "Obvious button"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Confusing wording that leads to unintended choice' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  343,
        "question":  "True or False: \"Preselection\" dark pattern pre-checks opt-in boxes.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  344,
        "question":  "What does \"false urgency\" create?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Artificial time pressure to buy"
                        },
                        {
                            "key":  "B",
                            "label":  "Real scarcity"
                        },
                        {
                            "key":  "C",
                            "label":  "Honest countdown"
                        },
                        {
                            "key":  "D",
                            "label":  "Transparent stock"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Artificial time pressure to buy' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  345,
        "question":  "Which of the following is a \"scarcity\" dark pattern?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Limited stock message with no actual limit"
                        },
                        {
                            "key":  "B",
                            "label":  "True limited edition"
                        },
                        {
                            "key":  "C",
                            "label":  "Clear stock count"
                        },
                        {
                            "key":  "D",
                            "label":  "Honest backorder"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Limited stock message with no actual limit' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  346,
        "question":  "True or False: \"Social proof\" dark pattern fabricates popularity.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  347,
        "question":  "What does \"fear of missing out\" (FOMO) exploit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Anxiety about being left out"
                        },
                        {
                            "key":  "B",
                            "label":  "Joy of saving"
                        },
                        {
                            "key":  "C",
                            "label":  "Satisfaction of buying"
                        },
                        {
                            "key":  "D",
                            "label":  "Trust in brand"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Anxiety about being left out' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  348,
        "question":  "Which of the following is an ethical design principle?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "User autonomy"
                        },
                        {
                            "key":  "B",
                            "label":  "Trickery"
                        },
                        {
                            "key":  "C",
                            "label":  "Hidden costs"
                        },
                        {
                            "key":  "D",
                            "label":  "Forced actions"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'User autonomy' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  349,
        "question":  "True or False: \"Inclusive design\" considers users with disabilities.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  350,
        "question":  "What does \"universal design\" aim for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Usable by all people to the greatest extent possible"
                        },
                        {
                            "key":  "B",
                            "label":  "Designed for one user"
                        },
                        {
                            "key":  "C",
                            "label":  "Excludes disabilities"
                        },
                        {
                            "key":  "D",
                            "label":  "Only for young people"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Usable by all people to the greatest extent possible' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  351,
        "question":  "Which of the following is a \"screen reader\" compatibility requirement?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Alt text for images"
                        },
                        {
                            "key":  "B",
                            "label":  "High contrast only"
                        },
                        {
                            "key":  "C",
                            "label":  "Large fonts"
                        },
                        {
                            "key":  "D",
                            "label":  "Video only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Alt text for images' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  352,
        "question":  "True or False: \"Keyboard navigation\" is essential for accessibility.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  353,
        "question":  "What does \"ARIA\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Accessible Rich Internet Applications"
                        },
                        {
                            "key":  "B",
                            "label":  "Advanced Robotics Interface Architecture"
                        },
                        {
                            "key":  "C",
                            "label":  "Automated Response Information Agent"
                        },
                        {
                            "key":  "D",
                            "label":  "Audio Recognition Input Algorithm"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Accessible Rich Internet Applications' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  354,
        "question":  "Which of the following is a \"color contrast\" ratio minimum (WCAG AA)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "4.5:1"
                        },
                        {
                            "key":  "B",
                            "label":  "1:1"
                        },
                        {
                            "key":  "C",
                            "label":  "10:1"
                        },
                        {
                            "key":  "D",
                            "label":  "2:1"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'4.5:1' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  355,
        "question":  "True or False: \"Focus indicators\" help keyboard users see where they are.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  356,
        "question":  "What does \"skip navigation\" link do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Allows bypassing repetitive menus"
                        },
                        {
                            "key":  "B",
                            "label":  "Skips to the end of page"
                        },
                        {
                            "key":  "C",
                            "label":  "Reloads the page"
                        },
                        {
                            "key":  "D",
                            "label":  "Closes the browser"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Allows bypassing repetitive menus' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  357,
        "question":  "Which of the following is a \"language attribute\" used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Screen reader pronunciation"
                        },
                        {
                            "key":  "B",
                            "label":  "Styling text"
                        },
                        {
                            "key":  "C",
                            "label":  "Database query"
                        },
                        {
                            "key":  "D",
                            "label":  "Image caption"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Screen reader pronunciation' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  358,
        "question":  "True or False: \"Captions\" are for users who are blind.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "False",
        "points":  1,
        "explanation":  "False. This is a common misconception; the opposite reflects sound TPM practice, and acting on the stated claim would lead to weak product, engineering, or stakeholder outcomes."
    },
    {
        "id":  359,
        "question":  "What does \"transcript\" provide?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Text version of audio or video"
                        },
                        {
                            "key":  "B",
                            "label":  "Summary of images"
                        },
                        {
                            "key":  "C",
                            "label":  "Code documentation"
                        },
                        {
                            "key":  "D",
                            "label":  "User manual"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Text version of audio or video' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  360,
        "question":  "Which of the following is a \"responsive design\" breakpoint?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Screen width"
                        },
                        {
                            "key":  "B",
                            "label":  "Screen height"
                        },
                        {
                            "key":  "C",
                            "label":  "Device battery"
                        },
                        {
                            "key":  "D",
                            "label":  "Network speed"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Screen width' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  361,
        "question":  "True or False: \"Mobile-first\" design starts with smallest screen.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  362,
        "question":  "What does \"touch target size\" recommendation start at?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "44x44 points"
                        },
                        {
                            "key":  "B",
                            "label":  "10x10 points"
                        },
                        {
                            "key":  "C",
                            "label":  "100x100 points"
                        },
                        {
                            "key":  "D",
                            "label":  "20x20 points"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'44x44 points' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  363,
        "question":  "Which of the following is a \"gesture\" accessibility concern?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Users with motor impairments may struggle with swipes"
                        },
                        {
                            "key":  "B",
                            "label":  "Gestures are always good"
                        },
                        {
                            "key":  "C",
                            "label":  "Only buttons matter"
                        },
                        {
                            "key":  "D",
                            "label":  "Gestures are faster"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Users with motor impairments may struggle with swipes' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  364,
        "question":  "True or False: \"Motion sensitivity\" can be triggered by animations.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  365,
        "question":  "What does \"prefers-reduced-motion\" media query do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Allows users to request fewer animations"
                        },
                        {
                            "key":  "B",
                            "label":  "Forces animations on"
                        },
                        {
                            "key":  "C",
                            "label":  "Removes all images"
                        },
                        {
                            "key":  "D",
                            "label":  "Disables sound"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Allows users to request fewer animations' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  366,
        "question":  "Which of the following is a \"cognitive accessibility\" best practice?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Plain language"
                        },
                        {
                            "key":  "B",
                            "label":  "Complex vocabulary"
                        },
                        {
                            "key":  "C",
                            "label":  "Long sentences"
                        },
                        {
                            "key":  "D",
                            "label":  "Abstract concepts"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Plain language' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  367,
        "question":  "True or False: \"Dyslexia-friendly\" fonts improve readability.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  368,
        "question":  "What does \"readability score\" measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How easy text is to understand"
                        },
                        {
                            "key":  "B",
                            "label":  "How fast it loads"
                        },
                        {
                            "key":  "C",
                            "label":  "How many images"
                        },
                        {
                            "key":  "D",
                            "label":  "How many links"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'How easy text is to understand' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  369,
        "question":  "Which of the following is a \"Flesch-Kincaid\" grade level?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Target 6-8 for general audience"
                        },
                        {
                            "key":  "B",
                            "label":  "Target college level"
                        },
                        {
                            "key":  "C",
                            "label":  "Target PhD level"
                        },
                        {
                            "key":  "D",
                            "label":  "No target"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Target 6-8 for general audience' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  370,
        "question":  "True or False: \"Bulleted lists\" improve scannability.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  371,
        "question":  "What does \"inverted pyramid\" writing put first?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Most important information"
                        },
                        {
                            "key":  "B",
                            "label":  "Least important"
                        },
                        {
                            "key":  "C",
                            "label":  "Funny story"
                        },
                        {
                            "key":  "D",
                            "label":  "Quote"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Most important information' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  372,
        "question":  "Which of the following is a \"microcopy\" example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Button label"
                        },
                        {
                            "key":  "B",
                            "label":  "Long article"
                        },
                        {
                            "key":  "C",
                            "label":  "Legal disclaimer"
                        },
                        {
                            "key":  "D",
                            "label":  "Company history"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Button label' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  373,
        "question":  "True or False: \"Error message\" should tell user what to do next.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  374,
        "question":  "What does \"progressive onboarding\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Spreads learning over time"
                        },
                        {
                            "key":  "B",
                            "label":  "Shows all tips at once"
                        },
                        {
                            "key":  "C",
                            "label":  "No onboarding"
                        },
                        {
                            "key":  "D",
                            "label":  "Video only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Spreads learning over time' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  375,
        "question":  "Which of the following is a \"tooltip\" used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Providing contextual help"
                        },
                        {
                            "key":  "B",
                            "label":  "Error reporting"
                        },
                        {
                            "key":  "C",
                            "label":  "Login"
                        },
                        {
                            "key":  "D",
                            "label":  "Payment"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Providing contextual help' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  376,
        "question":  "True or False: \"Placeholder text\" should not replace labels.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  377,
        "question":  "What does \"form validation\" inline do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Shows errors as user types"
                        },
                        {
                            "key":  "B",
                            "label":  "Shows errors only after submit"
                        },
                        {
                            "key":  "C",
                            "label":  "No validation"
                        },
                        {
                            "key":  "D",
                            "label":  "Server-side only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Shows errors as user types' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  378,
        "question":  "Which of the following is a \"default value\" best practice?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Use when helpful, but avoid hiding required fields"
                        },
                        {
                            "key":  "B",
                            "label":  "Always use defaults"
                        },
                        {
                            "key":  "C",
                            "label":  "Never use defaults"
                        },
                        {
                            "key":  "D",
                            "label":  "Only for optional fields"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Use when helpful, but avoid hiding required fields' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  379,
        "question":  "True or False: \"Autocomplete\" improves form completion speed.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  380,
        "question":  "What does \"breadcrumb\" navigation do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Shows user's location within site hierarchy"
                        },
                        {
                            "key":  "B",
                            "label":  "Adds crumbs to screen"
                        },
                        {
                            "key":  "C",
                            "label":  "Displays time"
                        },
                        {
                            "key":  "D",
                            "label":  "Shows battery level"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Shows user's location within site hierarchy' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  381,
        "question":  "Which of the following is a \"hamburger menu\" drawback?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Hides navigation, reducing discoverability"
                        },
                        {
                            "key":  "B",
                            "label":  "Takes too much space"
                        },
                        {
                            "key":  "C",
                            "label":  "Too colorful"
                        },
                        {
                            "key":  "D",
                            "label":  "Difficult to code"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Hides navigation, reducing discoverability' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  382,
        "question":  "True or False: \"Tab bar\" is common for mobile navigation.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  383,
        "question":  "What does \"bottom sheet\" UI component do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Slides up from bottom with additional options"
                        },
                        {
                            "key":  "B",
                            "label":  "Floats on top"
                        },
                        {
                            "key":  "C",
                            "label":  "Pushes content down"
                        },
                        {
                            "key":  "D",
                            "label":  "Closes the app"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Slides up from bottom with additional options' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  384,
        "question":  "Which of the following is a \"modal\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Dialog that interrupts the main flow"
                        },
                        {
                            "key":  "B",
                            "label":  "New page"
                        },
                        {
                            "key":  "C",
                            "label":  "Background element"
                        },
                        {
                            "key":  "D",
                            "label":  "Footer"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Dialog that interrupts the main flow' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  385,
        "question":  "True or False: \"Modals\" should be used sparingly.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  386,
        "question":  "What does \"skeleton screen\" do during loading?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Shows placeholder of content shape"
                        },
                        {
                            "key":  "B",
                            "label":  "Shows spinner only"
                        },
                        {
                            "key":  "C",
                            "label":  "Shows blank page"
                        },
                        {
                            "key":  "D",
                            "label":  "Shows error"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Shows placeholder of content shape' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  387,
        "question":  "Which of the following is a \"pull to refresh\" gesture?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Swipe down to reload"
                        },
                        {
                            "key":  "B",
                            "label":  "Swipe left to delete"
                        },
                        {
                            "key":  "C",
                            "label":  "Tap to refresh"
                        },
                        {
                            "key":  "D",
                            "label":  "Double tap"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Swipe down to reload' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  388,
        "question":  "True or False: \"Infinite scroll\" can cause difficulty reaching footer.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  389,
        "question":  "What does \"pagination\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Splits content across multiple pages"
                        },
                        {
                            "key":  "B",
                            "label":  "Loads all content at once"
                        },
                        {
                            "key":  "C",
                            "label":  "Hides content"
                        },
                        {
                            "key":  "D",
                            "label":  "Removes content"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Splits content across multiple pages' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  390,
        "question":  "Which of the following is a \"carousel\" usability issue?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Low click-through rates"
                        },
                        {
                            "key":  "B",
                            "label":  "High engagement"
                        },
                        {
                            "key":  "C",
                            "label":  "Easy to use"
                        },
                        {
                            "key":  "D",
                            "label":  "Fast loading"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Low click-through rates' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  391,
        "question":  "True or False: \"Accordion\" expands/collapses sections.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  392,
        "question":  "What does \"tabs\" UI pattern do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Organizes content into separate views without reload"
                        },
                        {
                            "key":  "B",
                            "label":  "Opens new windows"
                        },
                        {
                            "key":  "C",
                            "label":  "Refreshes page"
                        },
                        {
                            "key":  "D",
                            "label":  "Closes content"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Organizes content into separate views without reload' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  393,
        "question":  "Which of the following is a \"stepper\" used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Multi-step processes"
                        },
                        {
                            "key":  "B",
                            "label":  "Single page"
                        },
                        {
                            "key":  "C",
                            "label":  "Navigation only"
                        },
                        {
                            "key":  "D",
                            "label":  "Search"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Multi-step processes' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  394,
        "question":  "True or False: \"Search\" should have autocomplete suggestions.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  395,
        "question":  "What does \"filter\" help users do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Narrow down results"
                        },
                        {
                            "key":  "B",
                            "label":  "Broaden results"
                        },
                        {
                            "key":  "C",
                            "label":  "Sort randomly"
                        },
                        {
                            "key":  "D",
                            "label":  "Hide everything"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Narrow down results' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  396,
        "question":  "Which of the following is a \"sort\" control?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Arrange items by criteria"
                        },
                        {
                            "key":  "B",
                            "label":  "Remove items"
                        },
                        {
                            "key":  "C",
                            "label":  "Add items"
                        },
                        {
                            "key":  "D",
                            "label":  "Count items"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Arrange items by criteria' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  397,
        "question":  "True or False: \"Empty state\" should guide user to next action.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  398,
        "question":  "What does \"onboarding flow\" aim to achieve?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Show value quickly"
                        },
                        {
                            "key":  "B",
                            "label":  "Collect maximum data"
                        },
                        {
                            "key":  "C",
                            "label":  "Sell upgrades"
                        },
                        {
                            "key":  "D",
                            "label":  "Show ads"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Show value quickly' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  399,
        "question":  "Which of the following is a \"progressive profiling\" technique?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Ask for information over time"
                        },
                        {
                            "key":  "B",
                            "label":  "Ask all questions at signup"
                        },
                        {
                            "key":  "C",
                            "label":  "Never ask questions"
                        },
                        {
                            "key":  "D",
                            "label":  "Only ask email"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Ask for information over time' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  400,
        "question":  "True or False: \"Magic link\" email login is passwordless.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  401,
        "question":  "What does \"social login\" (Google, Facebook) reduce?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Friction for signup"
                        },
                        {
                            "key":  "B",
                            "label":  "Security"
                        },
                        {
                            "key":  "C",
                            "label":  "Privacy"
                        },
                        {
                            "key":  "D",
                            "label":  "Control"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Friction for signup' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  402,
        "question":  "Which of the following is a \"two-factor authentication\" (2FA) method?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "SMS code"
                        },
                        {
                            "key":  "B",
                            "label":  "Password only"
                        },
                        {
                            "key":  "C",
                            "label":  "Username only"
                        },
                        {
                            "key":  "D",
                            "label":  "Email only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'SMS code' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  403,
        "question":  "True or False: \"Biometric\" login uses fingerprint or face.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  404,
        "question":  "What does \"session timeout\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Logs out after inactivity"
                        },
                        {
                            "key":  "B",
                            "label":  "Never logs out"
                        },
                        {
                            "key":  "C",
                            "label":  "Logs out immediately"
                        },
                        {
                            "key":  "D",
                            "label":  "Crashes the app"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Logs out after inactivity' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  405,
        "question":  "Which of the following is a \"remember me\" checkbox benefit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Persistent login"
                        },
                        {
                            "key":  "B",
                            "label":  "Increased security"
                        },
                        {
                            "key":  "C",
                            "label":  "Shorter passwords"
                        },
                        {
                            "key":  "D",
                            "label":  "No benefit"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Persistent login' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  406,
        "question":  "True or False: \"Password strength meter\" improves security.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  407,
        "question":  "What does \"account recovery\" process help with?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Resetting forgotten password"
                        },
                        {
                            "key":  "B",
                            "label":  "Changing email"
                        },
                        {
                            "key":  "C",
                            "label":  "Deleting account"
                        },
                        {
                            "key":  "D",
                            "label":  "Upgrading plan"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Resetting forgotten password' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  408,
        "question":  "Which of the following is a \"data export\" feature?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Download user data"
                        },
                        {
                            "key":  "B",
                            "label":  "Upload data"
                        },
                        {
                            "key":  "C",
                            "label":  "Delete data"
                        },
                        {
                            "key":  "D",
                            "label":  "Share data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Download user data' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  409,
        "question":  "True or False: \"Right to be forgotten\" is a GDPR right.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  410,
        "question":  "What does \"data portability\" allow?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Move data to another service"
                        },
                        {
                            "key":  "B",
                            "label":  "Delete data"
                        },
                        {
                            "key":  "C",
                            "label":  "Anonymize data"
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypt data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Move data to another service' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  411,
        "question":  "Which of the following is a \"privacy policy\" required for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "All products collecting personal data"
                        },
                        {
                            "key":  "B",
                            "label":  "Only large companies"
                        },
                        {
                            "key":  "C",
                            "label":  "Only paid products"
                        },
                        {
                            "key":  "D",
                            "label":  "Only mobile apps"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'All products collecting personal data' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  412,
        "question":  "True or False: \"Cookie consent\" is required under GDPR.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  413,
        "question":  "What does \"anonymization\" of data do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Removes personally identifiable information"
                        },
                        {
                            "key":  "B",
                            "label":  "Adds identifiers"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypts data"
                        },
                        {
                            "key":  "D",
                            "label":  "Backs up data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Removes personally identifiable information' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  414,
        "question":  "Which of the following is a \"data retention policy\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How long data is kept"
                        },
                        {
                            "key":  "B",
                            "label":  "Where data is stored"
                        },
                        {
                            "key":  "C",
                            "label":  "Who accesses data"
                        },
                        {
                            "key":  "D",
                            "label":  "What data is collected"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'How long data is kept' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  415,
        "question":  "True or False: \"Security breach notification\" laws have time limits.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  416,
        "question":  "What does \"SOC2\" compliance certify?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Security, availability, processing integrity, confidentiality, privacy"
                        },
                        {
                            "key":  "B",
                            "label":  "Financial audit"
                        },
                        {
                            "key":  "C",
                            "label":  "Environmental impact"
                        },
                        {
                            "key":  "D",
                            "label":  "Employee satisfaction"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Security, availability, processing integrity, confidentiality, privacy' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  417,
        "question":  "Which of the following is an \"ISO 27001\" certification for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Information security management"
                        },
                        {
                            "key":  "B",
                            "label":  "Quality management"
                        },
                        {
                            "key":  "C",
                            "label":  "Environmental management"
                        },
                        {
                            "key":  "D",
                            "label":  "Food safety"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Information security management' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  418,
        "question":  "True or False: \"PCI DSS\" applies to credit card processing.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  419,
        "question":  "What does \"encryption at rest\" protect?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Stored data"
                        },
                        {
                            "key":  "B",
                            "label":  "Data in transit"
                        },
                        {
                            "key":  "C",
                            "label":  "Data in use"
                        },
                        {
                            "key":  "D",
                            "label":  "Backup data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Stored data' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  420,
        "question":  "Which of the following is \"encryption in transit\" example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "TLS/SSL"
                        },
                        {
                            "key":  "B",
                            "label":  "AES for files"
                        },
                        {
                            "key":  "C",
                            "label":  "Hashing passwords"
                        },
                        {
                            "key":  "D",
                            "label":  "Database encryption"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'TLS/SSL' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  421,
        "question":  "True or False: \"Hashing\" is a one-way function.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  422,
        "question":  "What does \"salting\" a password do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Adds random data before hashing"
                        },
                        {
                            "key":  "B",
                            "label":  "Encrypts it twice"
                        },
                        {
                            "key":  "C",
                            "label":  "Removes characters"
                        },
                        {
                            "key":  "D",
                            "label":  "Shortens it"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Adds random data before hashing' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  423,
        "question":  "Which of the following is a \"role-based access control\" (RBAC) concept?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Permissions based on user roles"
                        },
                        {
                            "key":  "B",
                            "label":  "Everyone has same access"
                        },
                        {
                            "key":  "C",
                            "label":  "Access by device"
                        },
                        {
                            "key":  "D",
                            "label":  "Access by time"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Permissions based on user roles' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  424,
        "question":  "True or False: \"Principle of least privilege\" grants minimal necessary access.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  425,
        "question":  "What does \"audit log\" track?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Who did what and when"
                        },
                        {
                            "key":  "B",
                            "label":  "System performance"
                        },
                        {
                            "key":  "C",
                            "label":  "User preferences"
                        },
                        {
                            "key":  "D",
                            "label":  "Feature usage"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Who did what and when' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  426,
        "question":  "Which of the following is a \"security by design\" principle?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Build security in from the start"
                        },
                        {
                            "key":  "B",
                            "label":  "Add security later"
                        },
                        {
                            "key":  "C",
                            "label":  "Ignore security"
                        },
                        {
                            "key":  "D",
                            "label":  "Only test security"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Build security in from the start' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  427,
        "question":  "True or False: \"Threat modeling\" identifies potential attacks.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  428,
        "question":  "What does \"DDoS\" attack aim to do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Overwhelm a system with traffic"
                        },
                        {
                            "key":  "B",
                            "label":  "Steal passwords"
                        },
                        {
                            "key":  "C",
                            "label":  "Inject code"
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypt data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Overwhelm a system with traffic' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  429,
        "question":  "Which of the following is a \"SQL injection\" prevention?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Parameterized queries"
                        },
                        {
                            "key":  "B",
                            "label":  "Plain text queries"
                        },
                        {
                            "key":  "C",
                            "label":  "Admin privileges"
                        },
                        {
                            "key":  "D",
                            "label":  "Default passwords"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Parameterized queries' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  430,
        "question":  "True or False: \"XSS\" (cross-site scripting) injects malicious scripts.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  431,
        "question":  "What does \"CSRF\" (cross-site request forgery) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Tricks user into unwanted actions"
                        },
                        {
                            "key":  "B",
                            "label":  "Steals cookies"
                        },
                        {
                            "key":  "C",
                            "label":  "Injects SQL"
                        },
                        {
                            "key":  "D",
                            "label":  "Reads files"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Tricks user into unwanted actions' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  432,
        "question":  "Which of the following is a \"CSP\" (Content Security Policy) for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Preventing XSS"
                        },
                        {
                            "key":  "B",
                            "label":  "Preventing DDoS"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypting data"
                        },
                        {
                            "key":  "D",
                            "label":  "Managing passwords"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Preventing XSS' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  433,
        "question":  "True or False: \"Rate limiting\" prevents brute force attacks.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  434,
        "question":  "What does \"CAPTCHA\" distinguish?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Humans from bots"
                        },
                        {
                            "key":  "B",
                            "label":  "Users from admins"
                        },
                        {
                            "key":  "C",
                            "label":  "Paid from free"
                        },
                        {
                            "key":  "D",
                            "label":  "New from returning"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Humans from bots' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  435,
        "question":  "Which of the following is a \"bug bounty\" program?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Reward for finding security vulnerabilities"
                        },
                        {
                            "key":  "B",
                            "label":  "Penalty for bugs"
                        },
                        {
                            "key":  "C",
                            "label":  "Free software"
                        },
                        {
                            "key":  "D",
                            "label":  "Training program"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Reward for finding security vulnerabilities' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  436,
        "question":  "True or False: \"Penetration testing\" simulates attacks.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  437,
        "question":  "What does \"zero-trust security\" assume?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "No one is trusted by default"
                        },
                        {
                            "key":  "B",
                            "label":  "Everyone is trusted"
                        },
                        {
                            "key":  "C",
                            "label":  "Only internal is trusted"
                        },
                        {
                            "key":  "D",
                            "label":  "Only external is trusted"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'No one is trusted by default' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  438,
        "question":  "Which of the following is a \"VPN\" used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Encrypting network traffic"
                        },
                        {
                            "key":  "B",
                            "label":  "Storing files"
                        },
                        {
                            "key":  "C",
                            "label":  "Editing code"
                        },
                        {
                            "key":  "D",
                            "label":  "Managing databases"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Encrypting network traffic' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  439,
        "question":  "True or False: \"Multi-factor authentication\" (MFA) requires two or more verification methods.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  440,
        "question":  "What does \"recovery code\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Allows access if MFA device lost"
                        },
                        {
                            "key":  "B",
                            "label":  "Resets password"
                        },
                        {
                            "key":  "C",
                            "label":  "Deletes account"
                        },
                        {
                            "key":  "D",
                            "label":  "Changes email"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Allows access if MFA device lost' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  441,
        "question":  "Which of the following is a \"security key\" (hardware)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "YubiKey"
                        },
                        {
                            "key":  "B",
                            "label":  "Google Authenticator"
                        },
                        {
                            "key":  "C",
                            "label":  "SMS code"
                        },
                        {
                            "key":  "D",
                            "label":  "Email link"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'YubiKey' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  442,
        "question":  "True or False: \"Security questions\" are generally considered weak.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  443,
        "question":  "What does \"credential stuffing\" attack use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Stolen username/password pairs"
                        },
                        {
                            "key":  "B",
                            "label":  "Brute force"
                        },
                        {
                            "key":  "C",
                            "label":  "Zero-day exploit"
                        },
                        {
                            "key":  "D",
                            "label":  "Physical theft"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Stolen username/password pairs' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  444,
        "question":  "Which of the following is a \"password manager\" benefit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Unique strong passwords"
                        },
                        {
                            "key":  "B",
                            "label":  "Same password everywhere"
                        },
                        {
                            "key":  "C",
                            "label":  "Writing passwords down"
                        },
                        {
                            "key":  "D",
                            "label":  "Sharing passwords"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Unique strong passwords' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  445,
        "question":  "True or False: \"Have I Been Pwned\" checks if credentials were leaked.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  446,
        "question":  "What does \"bug fix\" release typically increment?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Patch version (1.0.1)"
                        },
                        {
                            "key":  "B",
                            "label":  "Major version (2.0.0)"
                        },
                        {
                            "key":  "C",
                            "label":  "Minor version (1.1.0)"
                        },
                        {
                            "key":  "D",
                            "label":  "No change"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Patch version (1.0.1)' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  447,
        "question":  "Which of the following is \"semantic versioning\" format?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "MAJOR.MINOR.PATCH"
                        },
                        {
                            "key":  "B",
                            "label":  "MAJOR.PATCH.MINOR"
                        },
                        {
                            "key":  "C",
                            "label":  "PATCH.MINOR.MAJOR"
                        },
                        {
                            "key":  "D",
                            "label":  "MINOR.PATCH.MAJOR"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'MAJOR.MINOR.PATCH' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  448,
        "question":  "True or False: \"Backward compatibility\" means new version works with old data.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  449,
        "question":  "What does \"deprecation\" of a feature mean?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "It will be removed in a future version"
                        },
                        {
                            "key":  "B",
                            "label":  "It is removed immediately"
                        },
                        {
                            "key":  "C",
                            "label":  "It is now paid"
                        },
                        {
                            "key":  "D",
                            "label":  "It is now faster"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'It will be removed in a future version' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  450,
        "question":  "Which of the following is a \"sunset\" of a product?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Complete shutdown of the service"
                        },
                        {
                            "key":  "B",
                            "label":  "Major update"
                        },
                        {
                            "key":  "C",
                            "label":  "Price increase"
                        },
                        {
                            "key":  "D",
                            "label":  "Rebranding"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Complete shutdown of the service' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  451,
        "question":  "True or False: \"Migration path\" helps users move from old to new version.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  452,
        "question":  "What does \"end-of-life\" (EOL) mean?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "No more support or updates"
                        },
                        {
                            "key":  "B",
                            "label":  "Product is free"
                        },
                        {
                            "key":  "C",
                            "label":  "Product is open source"
                        },
                        {
                            "key":  "D",
                            "label":  "Product is best-selling"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'No more support or updates' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  453,
        "question":  "Which of the following is a \"patch Tuesday\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Microsoft's regular security update day"
                        },
                        {
                            "key":  "B",
                            "label":  "Apple's new product launch"
                        },
                        {
                            "key":  "C",
                            "label":  "Google's algorithm update"
                        },
                        {
                            "key":  "D",
                            "label":  "Amazon's sale day"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Microsoft's regular security update day' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  454,
        "question":  "True or False: \"LTS\" (Long-Term Support) version gets updates for years.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  455,
        "question":  "What does \"rolling release\" update model do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Continuous incremental updates"
                        },
                        {
                            "key":  "B",
                            "label":  "One big update per year"
                        },
                        {
                            "key":  "C",
                            "label":  "No updates"
                        },
                        {
                            "key":  "D",
                            "label":  "Manual updates only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Continuous incremental updates' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  456,
        "question":  "Which of the following is a \"blue-green deployment\" benefit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Zero-downtime switching"
                        },
                        {
                            "key":  "B",
                            "label":  "Slower releases"
                        },
                        {
                            "key":  "C",
                            "label":  "More bugs"
                        },
                        {
                            "key":  "D",
                            "label":  "Manual rollback"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Zero-downtime switching' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  457,
        "question":  "True or False: \"Canary deployment\" tests on a subset of users first.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  458,
        "question":  "What does \"feature toggle\" allow?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Turning features on/off without redeploying"
                        },
                        {
                            "key":  "B",
                            "label":  "Removing code"
                        },
                        {
                            "key":  "C",
                            "label":  "Disabling users"
                        },
                        {
                            "key":  "D",
                            "label":  "Changing database schema"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Turning features on/off without redeploying' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  459,
        "question":  "Which of the following is a \"rollback\" plan?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How to revert to a previous version"
                        },
                        {
                            "key":  "B",
                            "label":  "How to deploy new features"
                        },
                        {
                            "key":  "C",
                            "label":  "How to test code"
                        },
                        {
                            "key":  "D",
                            "label":  "How to scale servers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'How to revert to a previous version' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  460,
        "question":  "True or False: \"Immutable infrastructure\" replaces servers rather than updates them.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  461,
        "question":  "What does \"infrastructure as code\" (IaC) use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Machine-readable definition files"
                        },
                        {
                            "key":  "B",
                            "label":  "Manual server setup"
                        },
                        {
                            "key":  "C",
                            "label":  "Physical hardware"
                        },
                        {
                            "key":  "D",
                            "label":  "Spreadsheets"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Machine-readable definition files' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  462,
        "question":  "Which of the following is an IaC tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Terraform"
                        },
                        {
                            "key":  "B",
                            "label":  "Excel"
                        },
                        {
                            "key":  "C",
                            "label":  "Word"
                        },
                        {
                            "key":  "D",
                            "label":  "Photoshop"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Terraform' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  463,
        "question":  "True or False: \"Containerization\" (Docker) packages code with dependencies.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  464,
        "question":  "What does \"orchestration\" tool (Kubernetes) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Manages containers at scale"
                        },
                        {
                            "key":  "B",
                            "label":  "Writes code"
                        },
                        {
                            "key":  "C",
                            "label":  "Tests software"
                        },
                        {
                            "key":  "D",
                            "label":  "Designs UI"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Manages containers at scale' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  465,
        "question":  "Which of the following is a \"microservice\" advantage?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Independent deployment"
                        },
                        {
                            "key":  "B",
                            "label":  "Single codebase"
                        },
                        {
                            "key":  "C",
                            "label":  "Monolithic architecture"
                        },
                        {
                            "key":  "D",
                            "label":  "Harder to scale"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Independent deployment' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  466,
        "question":  "True or False: \"Serverless\" still uses servers (managed by provider).",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  467,
        "question":  "What does \"cold start\" in serverless refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Delay when function is first invoked"
                        },
                        {
                            "key":  "B",
                            "label":  "Server shutdown"
                        },
                        {
                            "key":  "C",
                            "label":  "Low temperature"
                        },
                        {
                            "key":  "D",
                            "label":  "Slow network"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Delay when function is first invoked' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  468,
        "question":  "Which of the following is a \"event-driven architecture\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Triggers on events like file upload"
                        },
                        {
                            "key":  "B",
                            "label":  "Polling every second"
                        },
                        {
                            "key":  "C",
                            "label":  "Scheduled batch"
                        },
                        {
                            "key":  "D",
                            "label":  "Manual trigger"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Triggers on events like file upload' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  469,
        "question":  "True or False: \"Message queue\" decouples producers and consumers.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  470,
        "question":  "What does \"dead letter queue\" (DLQ) hold?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Messages that failed processing"
                        },
                        {
                            "key":  "B",
                            "label":  "Successful messages"
                        },
                        {
                            "key":  "C",
                            "label":  "All messages"
                        },
                        {
                            "key":  "D",
                            "label":  "Only test messages"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Messages that failed processing' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  471,
        "question":  "Which of the following is a \"idempotency key\" used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Prevent duplicate processing"
                        },
                        {
                            "key":  "B",
                            "label":  "Speed up processing"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypt messages"
                        },
                        {
                            "key":  "D",
                            "label":  "Route messages"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Prevent duplicate processing' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  472,
        "question":  "True or False: \"Backpressure\" handles overload by slowing input.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  473,
        "question":  "What does \"circuit breaker\" pattern do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Stop calling failing service to allow recovery"
                        },
                        {
                            "key":  "B",
                            "label":  "Break the circuit physically"
                        },
                        {
                            "key":  "C",
                            "label":  "Increase voltage"
                        },
                        {
                            "key":  "D",
                            "label":  "Speed up calls"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Stop calling failing service to allow recovery' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  474,
        "question":  "Which of the following is a \"retry with backoff\" strategy?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Increasing delay between retries"
                        },
                        {
                            "key":  "B",
                            "label":  "Same delay every time"
                        },
                        {
                            "key":  "C",
                            "label":  "No retries"
                        },
                        {
                            "key":  "D",
                            "label":  "Random delay"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Increasing delay between retries' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  475,
        "question":  "True or False: \"Timeouts\" prevent hanging operations.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  476,
        "question":  "What does \"health check endpoint\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Reports if service is alive"
                        },
                        {
                            "key":  "B",
                            "label":  "Returns user data"
                        },
                        {
                            "key":  "C",
                            "label":  "Logs errors"
                        },
                        {
                            "key":  "D",
                            "label":  "Sends email"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Reports if service is alive' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  477,
        "question":  "Which of the following is a \"sidecar pattern\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Auxiliary container providing support"
                        },
                        {
                            "key":  "B",
                            "label":  "Main container only"
                        },
                        {
                            "key":  "C",
                            "label":  "No containers"
                        },
                        {
                            "key":  "D",
                            "label":  "Database container"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Auxiliary container providing support' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  478,
        "question":  "True or False: \"Ambassador pattern\" proxies communication.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  479,
        "question":  "What does \"adapter pattern\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Translates interfaces"
                        },
                        {
                            "key":  "B",
                            "label":  "Speeds up code"
                        },
                        {
                            "key":  "C",
                            "label":  "Reduces memory"
                        },
                        {
                            "key":  "D",
                            "label":  "Adds security"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Translates interfaces' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  480,
        "question":  "Which of the following is a \"strangler pattern\" for migration?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Gradually replace parts of legacy system"
                        },
                        {
                            "key":  "B",
                            "label":  "Rewrite everything at once"
                        },
                        {
                            "key":  "C",
                            "label":  "Ignore legacy system"
                        },
                        {
                            "key":  "D",
                            "label":  "Delete everything"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Gradually replace parts of legacy system' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  481,
        "question":  "True or False: \"Anti-corruption layer\" protects new system from legacy model.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  482,
        "question":  "What does \"domain-driven design\" (DDD) focus on?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Business domain and logic"
                        },
                        {
                            "key":  "B",
                            "label":  "Database design"
                        },
                        {
                            "key":  "C",
                            "label":  "UI design"
                        },
                        {
                            "key":  "D",
                            "label":  "Network protocols"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Business domain and logic' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  483,
        "question":  "Which of the following is a \"bounded context\" in DDD?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Clear boundary around a domain model"
                        },
                        {
                            "key":  "B",
                            "label":  "Whole system"
                        },
                        {
                            "key":  "C",
                            "label":  "Single class"
                        },
                        {
                            "key":  "D",
                            "label":  "No boundaries"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Clear boundary around a domain model' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  484,
        "question":  "True or False: \"Ubiquitous language\" means same terms across team and code.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  485,
        "question":  "What does \"aggregate root\" ensure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Consistency of a group of objects"
                        },
                        {
                            "key":  "B",
                            "label":  "Database connection"
                        },
                        {
                            "key":  "C",
                            "label":  "UI rendering"
                        },
                        {
                            "key":  "D",
                            "label":  "Logging"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Consistency of a group of objects' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  486,
        "question":  "Which of the following is a \"value object\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Immutable, defined by attributes"
                        },
                        {
                            "key":  "B",
                            "label":  "Has identity"
                        },
                        {
                            "key":  "C",
                            "label":  "Database row"
                        },
                        {
                            "key":  "D",
                            "label":  "User session"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Immutable, defined by attributes' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  487,
        "question":  "True or False: \"Entity\" in DDD has a unique identity.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  488,
        "question":  "What does \"repository pattern\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Mediates between domain and data mapping"
                        },
                        {
                            "key":  "B",
                            "label":  "Stores user preferences"
                        },
                        {
                            "key":  "C",
                            "label":  "Renders UI"
                        },
                        {
                            "key":  "D",
                            "label":  "Handles logging"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Mediates between domain and data mapping' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  489,
        "question":  "Which of the following is a \"specification pattern\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Encapsulates business rules"
                        },
                        {
                            "key":  "B",
                            "label":  "Database query"
                        },
                        {
                            "key":  "C",
                            "label":  "UI component"
                        },
                        {
                            "key":  "D",
                            "label":  "Logging"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Encapsulates business rules' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  490,
        "question":  "True or False: \"Event sourcing\" stores state changes as events.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  491,
        "question":  "What does \"CQRS\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Command Query Responsibility Segregation"
                        },
                        {
                            "key":  "B",
                            "label":  "Central Query Response System"
                        },
                        {
                            "key":  "C",
                            "label":  "Code Quality Review Standard"
                        },
                        {
                            "key":  "D",
                            "label":  "Continuous Query and Response System"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Command Query Responsibility Segregation' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  492,
        "question":  "Which of the following is a benefit of event sourcing?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Complete audit trail"
                        },
                        {
                            "key":  "B",
                            "label":  "Simpler code"
                        },
                        {
                            "key":  "C",
                            "label":  "Less storage"
                        },
                        {
                            "key":  "D",
                            "label":  "Faster queries"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Complete audit trail' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  493,
        "question":  "True or False: \"Saga pattern\" manages distributed transactions.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  494,
        "question":  "What does \"two-phase commit\" (2PC) ensure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Atomicity across distributed systems"
                        },
                        {
                            "key":  "B",
                            "label":  "Faster queries"
                        },
                        {
                            "key":  "C",
                            "label":  "Less code"
                        },
                        {
                            "key":  "D",
                            "label":  "Better UI"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Atomicity across distributed systems' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  495,
        "question":  "Which of the following is a \"CAP theorem\" trade-off?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Consistency vs. Availability"
                        },
                        {
                            "key":  "B",
                            "label":  "Security vs. Speed"
                        },
                        {
                            "key":  "C",
                            "label":  "Cost vs. Quality"
                        },
                        {
                            "key":  "D",
                            "label":  "Size vs. Complexity"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Consistency vs. Availability' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  496,
        "question":  "True or False: \"BASE\" (Basically Available, Soft state, Eventual consistency) is alternative to ACID.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  497,
        "question":  "What does \"sharding\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Splits database across multiple servers"
                        },
                        {
                            "key":  "B",
                            "label":  "Encrypts database"
                        },
                        {
                            "key":  "C",
                            "label":  "Backs up database"
                        },
                        {
                            "key":  "D",
                            "label":  "Indexes database"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Splits database across multiple servers' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  498,
        "question":  "Which of the following is a \"replication\" benefit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "High availability"
                        },
                        {
                            "key":  "B",
                            "label":  "More storage"
                        },
                        {
                            "key":  "C",
                            "label":  "Less memory"
                        },
                        {
                            "key":  "D",
                            "label":  "Faster writes"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'High availability' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  499,
        "question":  "True or False: \"Read replica\" handles read queries only.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  500,
        "question":  "What does \"leader-follower replication\" require?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "One leader for writes"
                        },
                        {
                            "key":  "B",
                            "label":  "All nodes can write"
                        },
                        {
                            "key":  "C",
                            "label":  "No writes"
                        },
                        {
                            "key":  "D",
                            "label":  "Read-only system"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'One leader for writes' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  501,
        "question":  "Which of the following is a \"consensus algorithm\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Raft"
                        },
                        {
                            "key":  "B",
                            "label":  "HTTP"
                        },
                        {
                            "key":  "C",
                            "label":  "SQL"
                        },
                        {
                            "key":  "D",
                            "label":  "JSON"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Raft' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  502,
        "question":  "True or False: \"Paxos\" is a consensus algorithm.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  503,
        "question":  "What does \"vector clock\" help with?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Causal ordering of events"
                        },
                        {
                            "key":  "B",
                            "label":  "Time synchronization"
                        },
                        {
                            "key":  "C",
                            "label":  "Load balancing"
                        },
                        {
                            "key":  "D",
                            "label":  "Error logging"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Causal ordering of events' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  504,
        "question":  "Which of the following is a \"distributed tracing\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Jaeger"
                        },
                        {
                            "key":  "B",
                            "label":  "Postman"
                        },
                        {
                            "key":  "C",
                            "label":  "Swagger"
                        },
                        {
                            "key":  "D",
                            "label":  "Figma"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Jaeger' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  505,
        "question":  "True or False: \"OpenTelemetry\" is a standard for observability.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  506,
        "question":  "What does \"span\" in tracing represent?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "A single operation or unit of work"
                        },
                        {
                            "key":  "B",
                            "label":  "The whole trace"
                        },
                        {
                            "key":  "C",
                            "label":  "An error"
                        },
                        {
                            "key":  "D",
                            "label":  "A log entry"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'A single operation or unit of work' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  507,
        "question":  "Which of the following is a \"log aggregation\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Elasticsearch"
                        },
                        {
                            "key":  "B",
                            "label":  "Git"
                        },
                        {
                            "key":  "C",
                            "label":  "Docker"
                        },
                        {
                            "key":  "D",
                            "label":  "Nginx"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Elasticsearch' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  508,
        "question":  "True or False: \"Structured logging\" (JSON) is machine-parseable.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  509,
        "question":  "What does \"log level\" (INFO, WARN, ERROR) indicate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Severity and importance"
                        },
                        {
                            "key":  "B",
                            "label":  "File size"
                        },
                        {
                            "key":  "C",
                            "label":  "Timestamp"
                        },
                        {
                            "key":  "D",
                            "label":  "Source code line"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Severity and importance' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  510,
        "question":  "Which of the following is a \"metrics\" aggregation example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Prometheus"
                        },
                        {
                            "key":  "B",
                            "label":  "Logstash"
                        },
                        {
                            "key":  "C",
                            "label":  "Kibana"
                        },
                        {
                            "key":  "D",
                            "label":  "Fluentd"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Prometheus' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  511,
        "question":  "True or False: \"Histogram\" metric type tracks distribution of values.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  512,
        "question":  "What does \"counter\" metric measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Only increasing values"
                        },
                        {
                            "key":  "B",
                            "label":  "Values that go up and down"
                        },
                        {
                            "key":  "C",
                            "label":  "Instantaneous value"
                        },
                        {
                            "key":  "D",
                            "label":  "Rates"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Only increasing values' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  513,
        "question":  "Which of the following is a \"gauge\" metric example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Current CPU usage"
                        },
                        {
                            "key":  "B",
                            "label":  "Total requests"
                        },
                        {
                            "key":  "C",
                            "label":  "Error count"
                        },
                        {
                            "key":  "D",
                            "label":  "Sum of values"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Current CPU usage' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  514,
        "question":  "True or False: \"Service level indicator\" (SLI) is a measured metric.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  515,
        "question":  "What does \"service level objective\" (SLO) define?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Target range for SLI"
                        },
                        {
                            "key":  "B",
                            "label":  "Error budget"
                        },
                        {
                            "key":  "C",
                            "label":  "Team size"
                        },
                        {
                            "key":  "D",
                            "label":  "Budget"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Target range for SLI' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  516,
        "question":  "Which of the following is a \"service level agreement\" (SLA) consequence?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Penalties for missing SLO"
                        },
                        {
                            "key":  "B",
                            "label":  "Rewards for good performance"
                        },
                        {
                            "key":  "C",
                            "label":  "No consequences"
                        },
                        {
                            "key":  "D",
                            "label":  "Only internal tracking"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Penalties for missing SLO' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  517,
        "question":  "True or False: \"Error budget\" is (1 - SLO) amount of allowable unreliability.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  518,
        "question":  "What does \"toil\" in SRE refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Manual, repetitive work"
                        },
                        {
                            "key":  "B",
                            "label":  "Automated tasks"
                        },
                        {
                            "key":  "C",
                            "label":  "Creative work"
                        },
                        {
                            "key":  "D",
                            "label":  "Strategic planning"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Manual, repetitive work' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  519,
        "question":  "Which of the following is a \"post-incident review\" output?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Action items to prevent recurrence"
                        },
                        {
                            "key":  "B",
                            "label":  "Blame assignment"
                        },
                        {
                            "key":  "C",
                            "label":  "Cover-up plan"
                        },
                        {
                            "key":  "D",
                            "label":  "Silence"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Action items to prevent recurrence' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  520,
        "question":  "True or False: \"Blameless postmortems\" focus on systems not people.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  521,
        "question":  "What does \"mean time to detect\" (MTTD) measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How long to discover an incident"
                        },
                        {
                            "key":  "B",
                            "label":  "How long to fix"
                        },
                        {
                            "key":  "C",
                            "label":  "Time between incidents"
                        },
                        {
                            "key":  "D",
                            "label":  "Recovery time"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'How long to discover an incident' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  522,
        "question":  "Which of the following is \"mean time to recover\" (MTTR)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Time to restore service"
                        },
                        {
                            "key":  "B",
                            "label":  "Time to detect"
                        },
                        {
                            "key":  "C",
                            "label":  "Time between failures"
                        },
                        {
                            "key":  "D",
                            "label":  "Time to respond"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Time to restore service' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  523,
        "question":  "True or False: \"Mean time between failures\" (MTBF) measures reliability.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  524,
        "question":  "What does \"availability\" formula (uptime) include?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "(Total time - Downtime) / Total time"
                        },
                        {
                            "key":  "B",
                            "label":  "(Downtime / Total time)"
                        },
                        {
                            "key":  "C",
                            "label":  "(Success / Total)"
                        },
                        {
                            "key":  "D",
                            "label":  "(Failures / Total)"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'(Total time - Downtime) / Total time' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  525,
        "question":  "Which of the following is \"five nines\" availability?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "99.999%"
                        },
                        {
                            "key":  "B",
                            "label":  "99.99%"
                        },
                        {
                            "key":  "C",
                            "label":  "99.9%"
                        },
                        {
                            "key":  "D",
                            "label":  "99%"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'99.999%' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  526,
        "question":  "True or False: \"Chaos engineering\" intentionally injects failures.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  527,
        "question":  "What does \"blast radius\" mean in chaos experiments?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Potential impact of failure"
                        },
                        {
                            "key":  "B",
                            "label":  "Size of the team"
                        },
                        {
                            "key":  "C",
                            "label":  "Number of servers"
                        },
                        {
                            "key":  "D",
                            "label":  "Time to recovery"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Potential impact of failure' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  528,
        "question":  "Which of the following is a \"game day\" exercise?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Simulated failure drill"
                        },
                        {
                            "key":  "B",
                            "label":  "Code review"
                        },
                        {
                            "key":  "C",
                            "label":  "Design sprint"
                        },
                        {
                            "key":  "D",
                            "label":  "User interview"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Simulated failure drill' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  529,
        "question":  "True or False: \"Capacity planning\" ensures enough resources for demand.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  530,
        "question":  "What does \"autoscaling\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Adjusts resources based on load"
                        },
                        {
                            "key":  "B",
                            "label":  "Manually adds servers"
                        },
                        {
                            "key":  "C",
                            "label":  "Removes all servers"
                        },
                        {
                            "key":  "D",
                            "label":  "Slows down requests"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Adjusts resources based on load' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  531,
        "question":  "Which of the following is a \"horizontal scaling\" approach?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Add more machines"
                        },
                        {
                            "key":  "B",
                            "label":  "Add more power to one machine"
                        },
                        {
                            "key":  "C",
                            "label":  "Optimize code"
                        },
                        {
                            "key":  "D",
                            "label":  "Reduce features"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Add more machines' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  532,
        "question":  "True or False: \"Vertical scaling\" means upgrading existing machine.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  533,
        "question":  "What does \"load balancer\" distribute?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Traffic across servers"
                        },
                        {
                            "key":  "B",
                            "label":  "Database queries"
                        },
                        {
                            "key":  "C",
                            "label":  "User data"
                        },
                        {
                            "key":  "D",
                            "label":  "Code files"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Traffic across servers' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  534,
        "question":  "Which of the following is a \"round robin\" load balancing algorithm?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Cycles through servers in order"
                        },
                        {
                            "key":  "B",
                            "label":  "Sends to fastest server"
                        },
                        {
                            "key":  "C",
                            "label":  "Sends to random server"
                        },
                        {
                            "key":  "D",
                            "label":  "Sends to all servers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Cycles through servers in order' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  535,
        "question":  "True or False: \"Sticky session\" ensures user goes to same server.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  536,
        "question":  "What does \"CDN\" (Content Delivery Network) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Caches content closer to users"
                        },
                        {
                            "key":  "B",
                            "label":  "Runs database queries"
                        },
                        {
                            "key":  "C",
                            "label":  "Hosts code repositories"
                        },
                        {
                            "key":  "D",
                            "label":  "Manages user authentication"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Caches content closer to users' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  537,
        "question":  "Which of the following is a \"cache invalidation\" challenge?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Ensuring cache reflects latest data"
                        },
                        {
                            "key":  "B",
                            "label":  "Storing too much data"
                        },
                        {
                            "key":  "C",
                            "label":  "Slow cache reads"
                        },
                        {
                            "key":  "D",
                            "label":  "Expensive cache writes"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Ensuring cache reflects latest data' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  538,
        "question":  "True or False: \"Cache-aside\" pattern loads cache on demand.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  539,
        "question":  "What does \"write-through cache\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Writes to cache and database simultaneously"
                        },
                        {
                            "key":  "B",
                            "label":  "Writes only to cache"
                        },
                        {
                            "key":  "C",
                            "label":  "Writes only to database"
                        },
                        {
                            "key":  "D",
                            "label":  "Writes later"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Writes to cache and database simultaneously' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  540,
        "question":  "Which of the following is a \"cache stampede\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Many requests miss cache and recompute simultaneously"
                        },
                        {
                            "key":  "B",
                            "label":  "Cache is too full"
                        },
                        {
                            "key":  "C",
                            "label":  "Cache is empty"
                        },
                        {
                            "key":  "D",
                            "label":  "Cache is slow"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Many requests miss cache and recompute simultaneously' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  541,
        "question":  "True or False: \"Cache TTL\" (time to live) auto-expires entries.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  542,
        "question":  "What does \"lazy loading\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Defers loading until needed"
                        },
                        {
                            "key":  "B",
                            "label":  "Loads everything upfront"
                        },
                        {
                            "key":  "C",
                            "label":  "Loads nothing"
                        },
                        {
                            "key":  "D",
                            "label":  "Preloads all"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Defers loading until needed' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  543,
        "question":  "Which of the following is a \"prefetching\" strategy?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Load likely needed resources in advance"
                        },
                        {
                            "key":  "B",
                            "label":  "Load on demand"
                        },
                        {
                            "key":  "C",
                            "label":  "Never load"
                        },
                        {
                            "key":  "D",
                            "label":  "Load random"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Load likely needed resources in advance' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  544,
        "question":  "True or False: \"Debouncing\" delays execution until activity stops.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  545,
        "question":  "What does \"throttling\" limit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Rate of execution"
                        },
                        {
                            "key":  "B",
                            "label":  "Total execution count"
                        },
                        {
                            "key":  "C",
                            "label":  "Memory usage"
                        },
                        {
                            "key":  "D",
                            "label":  "Network bandwidth"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Rate of execution' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  546,
        "question":  "Which of the following is a \"memoization\" benefit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Cache function results"
                        },
                        {
                            "key":  "B",
                            "label":  "Compress data"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypt output"
                        },
                        {
                            "key":  "D",
                            "label":  "Log calls"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Cache function results' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  547,
        "question":  "True or False: \"Batch processing\" handles many items together.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  548,
        "question":  "What does \"stream processing\" handle?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Real-time data flows"
                        },
                        {
                            "key":  "B",
                            "label":  "Historical batch"
                        },
                        {
                            "key":  "C",
                            "label":  "File uploads"
                        },
                        {
                            "key":  "D",
                            "label":  "Email sending"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Real-time data flows' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  549,
        "question":  "Which of the following is a \"Kafka\" use case?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Event streaming"
                        },
                        {
                            "key":  "B",
                            "label":  "Database storage"
                        },
                        {
                            "key":  "C",
                            "label":  "UI rendering"
                        },
                        {
                            "key":  "D",
                            "label":  "Authentication"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Event streaming' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  550,
        "question":  "True or False: \"Exactly-once semantics\" prevent duplicate processing.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  551,
        "question":  "What does \"at-least-once\" delivery guarantee?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "No data loss, possible duplicates"
                        },
                        {
                            "key":  "B",
                            "label":  "No duplicates, possible loss"
                        },
                        {
                            "key":  "C",
                            "label":  "Exactly one"
                        },
                        {
                            "key":  "D",
                            "label":  "Zero"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'No data loss, possible duplicates' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  552,
        "question":  "Which of the following is a \"checkpoint\" in stream processing?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Saved state for recovery"
                        },
                        {
                            "key":  "B",
                            "label":  "Log entry"
                        },
                        {
                            "key":  "C",
                            "label":  "Error log"
                        },
                        {
                            "key":  "D",
                            "label":  "Metric"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Saved state for recovery' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  553,
        "question":  "True or False: \"Watermark\" in streaming indicates event time progress.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  554,
        "question":  "What does \"windowing\" in stream processing do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Groups events by time"
                        },
                        {
                            "key":  "B",
                            "label":  "Filters events"
                        },
                        {
                            "key":  "C",
                            "label":  "Orders events"
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypts events"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Groups events by time' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  555,
        "question":  "Which of the following is a \"tumbling window\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Non-overlapping fixed-size windows"
                        },
                        {
                            "key":  "B",
                            "label":  "Overlapping windows"
                        },
                        {
                            "key":  "C",
                            "label":  "Session-based"
                        },
                        {
                            "key":  "D",
                            "label":  "Global window"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Non-overlapping fixed-size windows' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  556,
        "question":  "True or False: \"Sliding window\" overlaps.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  557,
        "question":  "What does \"session window\" track?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Periods of activity followed by inactivity"
                        },
                        {
                            "key":  "B",
                            "label":  "Fixed time"
                        },
                        {
                            "key":  "C",
                            "label":  "Global all"
                        },
                        {
                            "key":  "D",
                            "label":  "Tumbling only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Periods of activity followed by inactivity' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  558,
        "question":  "Which of the following is a \"late data\" handling strategy?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Allow late arrivals within watermark"
                        },
                        {
                            "key":  "B",
                            "label":  "Discard all late data"
                        },
                        {
                            "key":  "C",
                            "label":  "Process immediately"
                        },
                        {
                            "key":  "D",
                            "label":  "Ignore timestamps"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Allow late arrivals within watermark' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  559,
        "question":  "True or False: \"Lambda architecture\" combines batch and stream.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  560,
        "question":  "What does \"kappa architecture\" remove?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Batch layer (uses stream only)"
                        },
                        {
                            "key":  "B",
                            "label":  "Speed layer"
                        },
                        {
                            "key":  "C",
                            "label":  "Serving layer"
                        },
                        {
                            "key":  "D",
                            "label":  "All layers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Batch layer (uses stream only)' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  561,
        "question":  "Which of the following is a \"data lake\" characteristic?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Stores raw data in native format"
                        },
                        {
                            "key":  "B",
                            "label":  "Stores only structured data"
                        },
                        {
                            "key":  "C",
                            "label":  "Requires schema on write"
                        },
                        {
                            "key":  "D",
                            "label":  "Only for production"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Stores raw data in native format' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  562,
        "question":  "True or False: \"Data warehouse\" uses schema-on-write.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  563,
        "question":  "What does \"data mesh\" emphasize?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Domain-oriented decentralized data ownership"
                        },
                        {
                            "key":  "B",
                            "label":  "Central data lake"
                        },
                        {
                            "key":  "C",
                            "label":  "Single data warehouse"
                        },
                        {
                            "key":  "D",
                            "label":  "No governance"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Domain-oriented decentralized data ownership' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  564,
        "question":  "Which of the following is a \"data catalog\" used for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Metadata management and discovery"
                        },
                        {
                            "key":  "B",
                            "label":  "Storing raw data"
                        },
                        {
                            "key":  "C",
                            "label":  "Running queries"
                        },
                        {
                            "key":  "D",
                            "label":  "Visualizing data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Metadata management and discovery' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  565,
        "question":  "True or False: \"Data lineage\" tracks data origin and transformations.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  566,
        "question":  "What does \"data quality\" dimension \"accuracy\" mean?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Data correctly represents reality"
                        },
                        {
                            "key":  "B",
                            "label":  "No missing values"
                        },
                        {
                            "key":  "C",
                            "label":  "Consistent format"
                        },
                        {
                            "key":  "D",
                            "label":  "Unique records"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Data correctly represents reality' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  567,
        "question":  "Which of the following is \"completeness\" data quality?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "No missing values"
                        },
                        {
                            "key":  "B",
                            "label":  "Correct values"
                        },
                        {
                            "key":  "C",
                            "label":  "Same across systems"
                        },
                        {
                            "key":  "D",
                            "label":  "Recent updates"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'No missing values' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  568,
        "question":  "True or False: \"Consistency\" means same data across systems.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  569,
        "question":  "What does \"timeliness\" of data refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Data is up-to-date"
                        },
                        {
                            "key":  "B",
                            "label":  "Data is correct"
                        },
                        {
                            "key":  "C",
                            "label":  "Data is complete"
                        },
                        {
                            "key":  "D",
                            "label":  "Data is unique"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Data is up-to-date' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  570,
        "question":  "Which of the following is a \"data profiling\" output?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Column statistics, null counts"
                        },
                        {
                            "key":  "B",
                            "label":  "Query results"
                        },
                        {
                            "key":  "C",
                            "label":  "Dashboard"
                        },
                        {
                            "key":  "D",
                            "label":  "Report"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Column statistics, null counts' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  571,
        "question":  "True or False: \"Data cleansing\" fixes errors in data.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  572,
        "question":  "What does \"data masking\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Hides sensitive data for non-production use"
                        },
                        {
                            "key":  "B",
                            "label":  "Encrypts data at rest"
                        },
                        {
                            "key":  "C",
                            "label":  "Deletes data"
                        },
                        {
                            "key":  "D",
                            "label":  "Backups data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Hides sensitive data for non-production use' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  573,
        "question":  "Which of the following is a \"pseudonymization\" technique?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Replace identifiers with tokens"
                        },
                        {
                            "key":  "B",
                            "label":  "Remove all data"
                        },
                        {
                            "key":  "C",
                            "label":  "Anonymize completely"
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypt"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Replace identifiers with tokens' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  574,
        "question":  "True or False: \"Data minimization\" collects only necessary data.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  575,
        "question":  "What does \"data retention period\" specify?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "How long data is kept"
                        },
                        {
                            "key":  "B",
                            "label":  "Where data is stored"
                        },
                        {
                            "key":  "C",
                            "label":  "Who can access data"
                        },
                        {
                            "key":  "D",
                            "label":  "How data is backed up"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'How long data is kept' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  576,
        "question":  "Which of the following is a \"data subject access request\" (DSAR) right?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "User can request their data"
                        },
                        {
                            "key":  "B",
                            "label":  "Company can keep data forever"
                        },
                        {
                            "key":  "C",
                            "label":  "No access rights"
                        },
                        {
                            "key":  "D",
                            "label":  "Only for employees"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'User can request their data' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  577,
        "question":  "True or False: \"Data protection impact assessment\" (DPIA) is required for high-risk processing.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  578,
        "question":  "What does \"privacy by design\" mean?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Incorporate privacy into system design"
                        },
                        {
                            "key":  "B",
                            "label":  "Add privacy later"
                        },
                        {
                            "key":  "C",
                            "label":  "Ignore privacy"
                        },
                        {
                            "key":  "D",
                            "label":  "Only legal handles privacy"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Incorporate privacy into system design' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  579,
        "question":  "Which of the following is a \"data processing agreement\" (DPA) for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Between data controller and processor"
                        },
                        {
                            "key":  "B",
                            "label":  "Between two controllers"
                        },
                        {
                            "key":  "C",
                            "label":  "With end user"
                        },
                        {
                            "key":  "D",
                            "label":  "With regulator"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Between data controller and processor' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  580,
        "question":  "True or False: \"Binding corporate rules\" (BCRs) allow data transfers within a multinational group.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  581,
        "question":  "What does \"standard contractual clauses\" (SCCs) facilitate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Legal data transfers to non-adequate countries"
                        },
                        {
                            "key":  "B",
                            "label":  "Internal transfers"
                        },
                        {
                            "key":  "C",
                            "label":  "Marketing"
                        },
                        {
                            "key":  "D",
                            "label":  "Sales"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Legal data transfers to non-adequate countries' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  582,
        "question":  "Which of the following is a \"data protection authority\" (DPA) role?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Enforce data protection laws"
                        },
                        {
                            "key":  "B",
                            "label":  "Write code"
                        },
                        {
                            "key":  "C",
                            "label":  "Design UI"
                        },
                        {
                            "key":  "D",
                            "label":  "Manage servers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Enforce data protection laws' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  583,
        "question":  "True or False: \"Data breach notification\" must be within 72 hours under GDPR.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  584,
        "question":  "What does \"data controller\" decide?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Purpose and means of processing"
                        },
                        {
                            "key":  "B",
                            "label":  "Only technical processing"
                        },
                        {
                            "key":  "C",
                            "label":  "Only storage"
                        },
                        {
                            "key":  "D",
                            "label":  "Only security"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Purpose and means of processing' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  585,
        "question":  "Which of the following is a \"data processor\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Processes data on behalf of controller"
                        },
                        {
                            "key":  "B",
                            "label":  "Decides purpose"
                        },
                        {
                            "key":  "C",
                            "label":  "Owns the data"
                        },
                        {
                            "key":  "D",
                            "label":  "Is the user"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Processes data on behalf of controller' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  586,
        "question":  "True or False: \"Data protection officer\" (DPO) is required for some organizations.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  587,
        "question":  "What does \"privacy policy\" need to include?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "What data is collected and how it's used"
                        },
                        {
                            "key":  "B",
                            "label":  "Only company address"
                        },
                        {
                            "key":  "C",
                            "label":  "Only contact email"
                        },
                        {
                            "key":  "D",
                            "label":  "Only logo"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'What data is collected and how it's used' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  588,
        "question":  "Which of the following is a \"cookie consent\" requirement?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Opt-in for non-essential cookies"
                        },
                        {
                            "key":  "B",
                            "label":  "No consent needed"
                        },
                        {
                            "key":  "C",
                            "label":  "Implicit consent"
                        },
                        {
                            "key":  "D",
                            "label":  "Only for login"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Opt-in for non-essential cookies' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  589,
        "question":  "True or False: \"Legitimate interest\" is a legal basis for processing.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  590,
        "question":  "What does \"consent\" under GDPR require?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Freely given, specific, informed, unambiguous"
                        },
                        {
                            "key":  "B",
                            "label":  "Implicit by using site"
                        },
                        {
                            "key":  "C",
                            "label":  "Assume consent"
                        },
                        {
                            "key":  "D",
                            "label":  "Silence means consent"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Freely given, specific, informed, unambiguous' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  591,
        "question":  "Which of the following is a \"right to rectification\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Correct inaccurate data"
                        },
                        {
                            "key":  "B",
                            "label":  "Delete data"
                        },
                        {
                            "key":  "C",
                            "label":  "Port data"
                        },
                        {
                            "key":  "D",
                            "label":  "Restrict processing"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Correct inaccurate data' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  592,
        "question":  "True or False: \"Right to restriction of processing\" temporarily limits use of data.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  593,
        "question":  "What does \"data portability\" right apply to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Data provided by user, machine-readable"
                        },
                        {
                            "key":  "B",
                            "label":  "All data"
                        },
                        {
                            "key":  "C",
                            "label":  "Anonymized data"
                        },
                        {
                            "key":  "D",
                            "label":  "Aggregated data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Data provided by user, machine-readable' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  594,
        "question":  "Which of the following is a \"right to object\" to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Direct marketing"
                        },
                        {
                            "key":  "B",
                            "label":  "All processing"
                        },
                        {
                            "key":  "C",
                            "label":  "No processing"
                        },
                        {
                            "key":  "D",
                            "label":  "Only storage"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Direct marketing' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  595,
        "question":  "True or False: \"Automated individual decision-making\" has restrictions under GDPR.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  596,
        "question":  "What does \"profiling\" based on automated processing trigger?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Right to human intervention"
                        },
                        {
                            "key":  "B",
                            "label":  "No rights"
                        },
                        {
                            "key":  "C",
                            "label":  "Automatic approval"
                        },
                        {
                            "key":  "D",
                            "label":  "No transparency"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Right to human intervention' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  597,
        "question":  "Which of the following is a \"data protection seal\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Certification mechanism"
                        },
                        {
                            "key":  "B",
                            "label":  "Encryption method"
                        },
                        {
                            "key":  "C",
                            "label":  "Backup type"
                        },
                        {
                            "key":  "D",
                            "label":  "Database index"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Certification mechanism' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  598,
        "question":  "True or False: \"Code of conduct\" can demonstrate compliance.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  599,
        "question":  "What does \"privacy shield\" (invalidated) was for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "EU-US data transfers"
                        },
                        {
                            "key":  "B",
                            "label":  "EU-UK data"
                        },
                        {
                            "key":  "C",
                            "label":  "Internal EU"
                        },
                        {
                            "key":  "D",
                            "label":  "Global transfers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'EU-US data transfers' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  600,
        "question":  "Which of the following is a \"adequacy decision\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "EU recognizes country's data protection as equivalent"
                        },
                        {
                            "key":  "B",
                            "label":  "Company self-certifies"
                        },
                        {
                            "key":  "C",
                            "label":  "User agrees"
                        },
                        {
                            "key":  "D",
                            "label":  "No decision"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'EU recognizes country's data protection as equivalent' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  601,
        "question":  "True or False: \"Derogations\" allow transfers in specific situations without adequacy.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  602,
        "question":  "What does \"Schrems II\" ruling affect?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "EU-US data transfers"
                        },
                        {
                            "key":  "B",
                            "label":  "UK GDPR"
                        },
                        {
                            "key":  "C",
                            "label":  "California privacy"
                        },
                        {
                            "key":  "D",
                            "label":  "China privacy"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'EU-US data transfers' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  603,
        "question":  "Which of the following is a \"transfer impact assessment\" (TIA)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Assess risks of international data transfer"
                        },
                        {
                            "key":  "B",
                            "label":  "Assess internal security"
                        },
                        {
                            "key":  "C",
                            "label":  "Assess marketing"
                        },
                        {
                            "key":  "D",
                            "label":  "Assess sales"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Assess risks of international data transfer' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  604,
        "question":  "True or False: \"Cloud Act\" allows US law enforcement to access data from US companies.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  605,
        "question":  "What does \"CCPA\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "California Consumer Privacy Act"
                        },
                        {
                            "key":  "B",
                            "label":  "Canadian Consumer Privacy Act"
                        },
                        {
                            "key":  "C",
                            "label":  "Central Consumer Protection Act"
                        },
                        {
                            "key":  "D",
                            "label":  "Corporate Compliance and Privacy Act"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'California Consumer Privacy Act' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  606,
        "question":  "Which of the following is a CCPA right?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Right to opt-out of sale of personal information"
                        },
                        {
                            "key":  "B",
                            "label":  "Right to erasure only"
                        },
                        {
                            "key":  "C",
                            "label":  "No rights"
                        },
                        {
                            "key":  "D",
                            "label":  "Right to free products"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Right to opt-out of sale of personal information' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  607,
        "question":  "True or False: \"CPRA\" amended and expanded CCPA.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  608,
        "question":  "What does \"LGPD\" apply to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Brazil"
                        },
                        {
                            "key":  "B",
                            "label":  "Germany"
                        },
                        {
                            "key":  "C",
                            "label":  "France"
                        },
                        {
                            "key":  "D",
                            "label":  "Japan"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Brazil' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  609,
        "question":  "Which of the following is a \"PIPEDA\" law?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Canada's privacy law"
                        },
                        {
                            "key":  "B",
                            "label":  "US federal law"
                        },
                        {
                            "key":  "C",
                            "label":  "UK law"
                        },
                        {
                            "key":  "D",
                            "label":  "Australian law"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Canada's privacy law' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  610,
        "question":  "True or False: \"Privacy Act 1988\" applies to Australia.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  611,
        "question":  "What does \"PDPA\" apply to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Singapore"
                        },
                        {
                            "key":  "B",
                            "label":  "India"
                        },
                        {
                            "key":  "C",
                            "label":  "Malaysia"
                        },
                        {
                            "key":  "D",
                            "label":  "All of the above"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "'All of the above' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  612,
        "question":  "Which of the following is a \"COPPA\" requirement?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Parental consent for children under 13"
                        },
                        {
                            "key":  "B",
                            "label":  "No consent needed"
                        },
                        {
                            "key":  "C",
                            "label":  "Only for teens"
                        },
                        {
                            "key":  "D",
                            "label":  "Only for adults"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Parental consent for children under 13' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  613,
        "question":  "True or False: \"FERPA\" protects student education records.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  614,
        "question":  "What does \"HIPAA\" regulate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Health information privacy"
                        },
                        {
                            "key":  "B",
                            "label":  "Financial data"
                        },
                        {
                            "key":  "C",
                            "label":  "Education records"
                        },
                        {
                            "key":  "D",
                            "label":  "Consumer credit"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Health information privacy' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  615,
        "question":  "Which of the following is a \"GLBA\" requirement?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Financial privacy notices"
                        },
                        {
                            "key":  "B",
                            "label":  "Health privacy"
                        },
                        {
                            "key":  "C",
                            "label":  "Student privacy"
                        },
                        {
                            "key":  "D",
                            "label":  "Email privacy"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Financial privacy notices' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  616,
        "question":  "True or False: \"FCRA\" governs credit reporting.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  617,
        "question":  "What does \"CAN-SPAM\" regulate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Commercial email"
                        },
                        {
                            "key":  "B",
                            "label":  "Spam calls"
                        },
                        {
                            "key":  "C",
                            "label":  "Text messages"
                        },
                        {
                            "key":  "D",
                            "label":  "Direct mail"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Commercial email' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  618,
        "question":  "Which of the following is a \"TCPA\" restriction?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Robocalls without consent"
                        },
                        {
                            "key":  "B",
                            "label":  "Email spam"
                        },
                        {
                            "key":  "C",
                            "label":  "Online tracking"
                        },
                        {
                            "key":  "D",
                            "label":  "Cookies"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Robocalls without consent' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  619,
        "question":  "True or False: \"ePrivacy Directive\" (EU) covers cookies and electronic communications.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  620,
        "question":  "What does \"PECR\" (UK) regulate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Privacy and Electronic Communications"
                        },
                        {
                            "key":  "B",
                            "label":  "Product Engineering"
                        },
                        {
                            "key":  "C",
                            "label":  "Public Economic"
                        },
                        {
                            "key":  "D",
                            "label":  "Personal Encryption"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Privacy and Electronic Communications' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  621,
        "question":  "Which of the following is a \"data protection by default\" measure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Only collect necessary data"
                        },
                        {
                            "key":  "B",
                            "label":  "Collect all possible data"
                        },
                        {
                            "key":  "C",
                            "label":  "Store forever"
                        },
                        {
                            "key":  "D",
                            "label":  "No access controls"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Only collect necessary data' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  622,
        "question":  "True or False: \"Security by design\" is similar to privacy by design.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  623,
        "question":  "What does \"threat modeling\" output?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "List of potential threats and mitigations"
                        },
                        {
                            "key":  "B",
                            "label":  "Code"
                        },
                        {
                            "key":  "C",
                            "label":  "UI design"
                        },
                        {
                            "key":  "D",
                            "label":  "Marketing plan"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'List of potential threats and mitigations' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  624,
        "question":  "Which of the following is a \"STRIDE\" threat category?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege"
                        },
                        {
                            "key":  "B",
                            "label":  "Security, Time, Risk, Identity, Data, Encryption"
                        },
                        {
                            "key":  "C",
                            "label":  "Standard, Test, Review, Inspect, Deploy, Evaluate"
                        },
                        {
                            "key":  "D",
                            "label":  "System, Threat, Response, Incident, Detection, Evaluation"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  625,
        "question":  "True or False: \"DREAD\" model rates risk severity.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  626,
        "question":  "What does \"attack surface\" refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "All points where an attacker can enter"
                        },
                        {
                            "key":  "B",
                            "label":  "Number of users"
                        },
                        {
                            "key":  "C",
                            "label":  "Code lines"
                        },
                        {
                            "key":  "D",
                            "label":  "Server count"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'All points where an attacker can enter' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  627,
        "question":  "Which of the following reduces attack surface?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Disable unused services"
                        },
                        {
                            "key":  "B",
                            "label":  "Add more ports"
                        },
                        {
                            "key":  "C",
                            "label":  "Open all firewalls"
                        },
                        {
                            "key":  "D",
                            "label":  "Install more software"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Disable unused services' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  628,
        "question":  "True or False: \"Defense in depth\" uses multiple layers of security.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  629,
        "question":  "What does \"zero-day exploit\" target?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Vulnerability unknown to vendor"
                        },
                        {
                            "key":  "B",
                            "label":  "Old bug"
                        },
                        {
                            "key":  "C",
                            "label":  "Configuration error"
                        },
                        {
                            "key":  "D",
                            "label":  "User mistake"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Vulnerability unknown to vendor' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  630,
        "question":  "Which of the following is a \"patch management\" process?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Regularly apply security updates"
                        },
                        {
                            "key":  "B",
                            "label":  "Ignore updates"
                        },
                        {
                            "key":  "C",
                            "label":  "Only update once"
                        },
                        {
                            "key":  "D",
                            "label":  "Manual updates only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Regularly apply security updates' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  631,
        "question":  "True or False: \"Vulnerability scanning\" finds known weaknesses.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  632,
        "question":  "What does \"penetration test\" simulate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Real attack"
                        },
                        {
                            "key":  "B",
                            "label":  "User behavior"
                        },
                        {
                            "key":  "C",
                            "label":  "System load"
                        },
                        {
                            "key":  "D",
                            "label":  "Data backup"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Real attack' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  633,
        "question":  "Which of the following is a \"red team\" exercise?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Offensive security simulation"
                        },
                        {
                            "key":  "B",
                            "label":  "Defensive only"
                        },
                        {
                            "key":  "C",
                            "label":  "Compliance check"
                        },
                        {
                            "key":  "D",
                            "label":  "Code review"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Offensive security simulation' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  634,
        "question":  "True or False: \"Blue team\" defends against red team.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  635,
        "question":  "What does \"purple team\" combine?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Red and blue teamwork"
                        },
                        {
                            "key":  "B",
                            "label":  "Only red"
                        },
                        {
                            "key":  "C",
                            "label":  "Only blue"
                        },
                        {
                            "key":  "D",
                            "label":  "Neither"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Red and blue teamwork' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  636,
        "question":  "Which of the following is a \"bug bounty\" reward?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Money for finding vulnerabilities"
                        },
                        {
                            "key":  "B",
                            "label":  "Free software"
                        },
                        {
                            "key":  "C",
                            "label":  "Certificate"
                        },
                        {
                            "key":  "D",
                            "label":  "T-shirt"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Money for finding vulnerabilities' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  637,
        "question":  "True or False: \"Responsible disclosure\" gives vendor time to fix before public release.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  638,
        "question":  "What does \"security.txt\" file do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Provides contact for security researchers"
                        },
                        {
                            "key":  "B",
                            "label":  "Logs security events"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypts traffic"
                        },
                        {
                            "key":  "D",
                            "label":  "Backups data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Provides contact for security researchers' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  639,
        "question":  "Which of the following is a \"CVE\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Common Vulnerabilities and Exposures identifier"
                        },
                        {
                            "key":  "B",
                            "label":  "Central Verification Entity"
                        },
                        {
                            "key":  "C",
                            "label":  "Code Version Engine"
                        },
                        {
                            "key":  "D",
                            "label":  "Customer Value Estimate"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Common Vulnerabilities and Exposures identifier' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  640,
        "question":  "True or False: \"CVSS\" score rates vulnerability severity.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  641,
        "question":  "What does \"EPSS\" (Exploit Prediction Scoring System) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Predicts likelihood of exploitation"
                        },
                        {
                            "key":  "B",
                            "label":  "Measures impact"
                        },
                        {
                            "key":  "C",
                            "label":  "Counts CVEs"
                        },
                        {
                            "key":  "D",
                            "label":  "Tracks patches"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Predicts likelihood of exploitation' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  642,
        "question":  "Which of the following is a \"SBOM\" (Software Bill of Materials)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "List of components and dependencies"
                        },
                        {
                            "key":  "B",
                            "label":  "Build tool"
                        },
                        {
                            "key":  "C",
                            "label":  "Deployment script"
                        },
                        {
                            "key":  "D",
                            "label":  "Test suite"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'List of components and dependencies' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  643,
        "question":  "True or False: \"Secure coding guidelines\" prevent common vulnerabilities.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  644,
        "question":  "What does \"input validation\" prevent?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Injection attacks"
                        },
                        {
                            "key":  "B",
                            "label":  "Buffer overflow"
                        },
                        {
                            "key":  "C",
                            "label":  "Memory leak"
                        },
                        {
                            "key":  "D",
                            "label":  "Deadlock"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Injection attacks' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  645,
        "question":  "Which of the following is a \"output encoding\" best practice?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Encode data before displaying"
                        },
                        {
                            "key":  "B",
                            "label":  "Validate after"
                        },
                        {
                            "key":  "C",
                            "label":  "No encoding"
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypt before display"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Encode data before displaying' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  646,
        "question":  "True or False: \"Parameterized queries\" prevent SQL injection.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  647,
        "question":  "What does \"allowlist\" (whitelist) validation do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Only accept known good values"
                        },
                        {
                            "key":  "B",
                            "label":  "Block known bad values"
                        },
                        {
                            "key":  "C",
                            "label":  "Accept everything"
                        },
                        {
                            "key":  "D",
                            "label":  "No validation"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Only accept known good values' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  648,
        "question":  "Which of the following is a \"session management\" best practice?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Regenerate session ID after login"
                        },
                        {
                            "key":  "B",
                            "label":  "Never expire sessions"
                        },
                        {
                            "key":  "C",
                            "label":  "Use predictable IDs"
                        },
                        {
                            "key":  "D",
                            "label":  "Store session in URL"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Regenerate session ID after login' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  649,
        "question":  "True or False: \"HTTP-only\" cookies prevent JavaScript access.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  650,
        "question":  "What does \"secure flag\" on cookie do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Send only over HTTPS"
                        },
                        {
                            "key":  "B",
                            "label":  "Send over HTTP"
                        },
                        {
                            "key":  "C",
                            "label":  "Never send"
                        },
                        {
                            "key":  "D",
                            "label":  "Always send"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Send only over HTTPS' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  651,
        "question":  "Which of the following is \"same-site\" cookie attribute?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Strict, Lax, None"
                        },
                        {
                            "key":  "B",
                            "label":  "High, Medium, Low"
                        },
                        {
                            "key":  "C",
                            "label":  "1, 2, 3"
                        },
                        {
                            "key":  "D",
                            "label":  "A, B, C"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Strict, Lax, None' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  652,
        "question":  "True or False: \"CSP\" (Content Security Policy) reduces XSS.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  653,
        "question":  "What does \"HSTS\" (HTTP Strict Transport Security) enforce?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Always use HTTPS"
                        },
                        {
                            "key":  "B",
                            "label":  "Allow HTTP only"
                        },
                        {
                            "key":  "C",
                            "label":  "Disable SSL"
                        },
                        {
                            "key":  "D",
                            "label":  "Mixed content"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Always use HTTPS' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  654,
        "question":  "Which of the following is a \"X-Frame-Options\" header prevent?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Clickjacking"
                        },
                        {
                            "key":  "B",
                            "label":  "XSS"
                        },
                        {
                            "key":  "C",
                            "label":  "SQLi"
                        },
                        {
                            "key":  "D",
                            "label":  "CSRF"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Clickjacking' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  655,
        "question":  "True or False: \"Referrer-Policy\" controls referrer information.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  656,
        "question":  "What does \"CORS\" configuration control?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Which origins can access resources"
                        },
                        {
                            "key":  "B",
                            "label":  "Which users can login"
                        },
                        {
                            "key":  "C",
                            "label":  "Which databases"
                        },
                        {
                            "key":  "D",
                            "label":  "Which servers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Which origins can access resources' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  657,
        "question":  "Which of the following is a \"security header\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "X-Content-Type-Options"
                        },
                        {
                            "key":  "B",
                            "label":  "Content-Type"
                        },
                        {
                            "key":  "C",
                            "label":  "Cache-Control"
                        },
                        {
                            "key":  "D",
                            "label":  "Accept"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'X-Content-Type-Options' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  658,
        "question":  "True or False: \"Subresource Integrity\" (SRI) ensures fetched resources haven't been tampered.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  659,
        "question":  "What does \"cross-origin isolation\" require?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "COOP and COEP headers"
                        },
                        {
                            "key":  "B",
                            "label":  "Same-origin only"
                        },
                        {
                            "key":  "C",
                            "label":  "No isolation"
                        },
                        {
                            "key":  "D",
                            "label":  "Allow all"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'COOP and COEP headers' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  660,
        "question":  "Which of the following is a \"CORP\" header?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Cross-Origin Resource Policy"
                        },
                        {
                            "key":  "B",
                            "label":  "Cross-Origin Request Protocol"
                        },
                        {
                            "key":  "C",
                            "label":  "Central Operating Resource"
                        },
                        {
                            "key":  "D",
                            "label":  "Control Origin Response"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Cross-Origin Resource Policy' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  661,
        "question":  "True or False: \"Feature-Policy\" / \"Permissions-Policy\" controls browser features.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  662,
        "question":  "What does \"Trusted Types\" help prevent?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "DOM XSS"
                        },
                        {
                            "key":  "B",
                            "label":  "SQL injection"
                        },
                        {
                            "key":  "C",
                            "label":  "CSRF"
                        },
                        {
                            "key":  "D",
                            "label":  "DDoS"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'DOM XSS' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  663,
        "question":  "Which of the following is a \"security champion\" role?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Developer responsible for security in team"
                        },
                        {
                            "key":  "B",
                            "label":  "External auditor"
                        },
                        {
                            "key":  "C",
                            "label":  "CISO"
                        },
                        {
                            "key":  "D",
                            "label":  "Penetration tester"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Developer responsible for security in team' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  664,
        "question":  "True or False: \"Threat hunting\" proactively searches for threats.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  665,
        "question":  "What does \"SOAR\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Security Orchestration, Automation, and Response"
                        },
                        {
                            "key":  "B",
                            "label":  "Security Operations and Analysis Report"
                        },
                        {
                            "key":  "C",
                            "label":  "System Observation and Response"
                        },
                        {
                            "key":  "D",
                            "label":  "Secure Online Access Registry"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Security Orchestration, Automation, and Response' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  666,
        "question":  "Which of the following is a \"SIEM\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Splunk"
                        },
                        {
                            "key":  "B",
                            "label":  "Wireshark"
                        },
                        {
                            "key":  "C",
                            "label":  "Nmap"
                        },
                        {
                            "key":  "D",
                            "label":  "Metasploit"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Splunk' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  667,
        "question":  "True or False: \"EDR\" (Endpoint Detection and Response) monitors endpoints.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  668,
        "question":  "What does \"NDR\" focus on?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Network traffic analysis"
                        },
                        {
                            "key":  "B",
                            "label":  "Endpoint"
                        },
                        {
                            "key":  "C",
                            "label":  "Cloud"
                        },
                        {
                            "key":  "D",
                            "label":  "Identity"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Network traffic analysis' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  669,
        "question":  "Which of the following is a \"XDR\" (Extended Detection and Response) benefit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Cross-layer correlation"
                        },
                        {
                            "key":  "B",
                            "label":  "Single log"
                        },
                        {
                            "key":  "C",
                            "label":  "Manual response"
                        },
                        {
                            "key":  "D",
                            "label":  "No automation"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Cross-layer correlation' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  670,
        "question":  "True or False: \"MDR\" is managed detection and response service.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  671,
        "question":  "What does \"UEBA\" (User and Entity Behavior Analytics) detect?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Anomalous behavior"
                        },
                        {
                            "key":  "B",
                            "label":  "Known signatures"
                        },
                        {
                            "key":  "C",
                            "label":  "Compliance only"
                        },
                        {
                            "key":  "D",
                            "label":  "Performance issues"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Anomalous behavior' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  672,
        "question":  "Which of the following is a \"honeypot\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Decoy system to attract attackers"
                        },
                        {
                            "key":  "B",
                            "label":  "Real production server"
                        },
                        {
                            "key":  "C",
                            "label":  "Firewall"
                        },
                        {
                            "key":  "D",
                            "label":  "IDS"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Decoy system to attract attackers' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  673,
        "question":  "True or False: \"Sandbox\" isolates untrusted code.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  674,
        "question":  "What does \"reverse engineering\" of malware aim to do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Understand its behavior"
                        },
                        {
                            "key":  "B",
                            "label":  "Delete it"
                        },
                        {
                            "key":  "C",
                            "label":  "Quarantine it"
                        },
                        {
                            "key":  "D",
                            "label":  "Ignore it"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Understand its behavior' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  675,
        "question":  "Which of the following is a \"ransomware\" characteristic?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Encrypts data and demands payment"
                        },
                        {
                            "key":  "B",
                            "label":  "Steals passwords"
                        },
                        {
                            "key":  "C",
                            "label":  "Monitors keystrokes"
                        },
                        {
                            "key":  "D",
                            "label":  "Displays ads"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Encrypts data and demands payment' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  676,
        "question":  "True or False: \"Phishing\" attacks trick users into revealing credentials.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  677,
        "question":  "What does \"spear phishing\" target?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Specific individual or company"
                        },
                        {
                            "key":  "B",
                            "label":  "Random users"
                        },
                        {
                            "key":  "C",
                            "label":  "All employees"
                        },
                        {
                            "key":  "D",
                            "label":  "Only executives"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Specific individual or company' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  678,
        "question":  "Which of the following is a \"whaling\" attack?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Targeting high-profile executives"
                        },
                        {
                            "key":  "B",
                            "label":  "Targeting low-level employees"
                        },
                        {
                            "key":  "C",
                            "label":  "Targeting IT staff"
                        },
                        {
                            "key":  "D",
                            "label":  "Targeting customers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Targeting high-profile executives' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  679,
        "question":  "True or False: \"Smishing\" is SMS phishing.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  680,
        "question":  "What does \"vishing\" use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Voice calls"
                        },
                        {
                            "key":  "B",
                            "label":  "Email"
                        },
                        {
                            "key":  "C",
                            "label":  "Text messages"
                        },
                        {
                            "key":  "D",
                            "label":  "Social media"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Voice calls' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  681,
        "question":  "Which of the following is a \"business email compromise\" (BEC) scam?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Impersonate executive to request transfers"
                        },
                        {
                            "key":  "B",
                            "label":  "Fake invoice from vendor"
                        },
                        {
                            "key":  "C",
                            "label":  "Both A and B"
                        },
                        {
                            "key":  "D",
                            "label":  "Neither"
                        }
                    ],
        "correct":  "C",
        "points":  1,
        "explanation":  "'Both A and B' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  682,
        "question":  "True or False: \"Pretexting\" creates a fabricated scenario.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  683,
        "question":  "What does \"tailgating\" physical security breach involve?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Following authorized person into secure area"
                        },
                        {
                            "key":  "B",
                            "label":  "Stealing badge"
                        },
                        {
                            "key":  "C",
                            "label":  "Hacking lock"
                        },
                        {
                            "key":  "D",
                            "label":  "Breaking window"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Following authorized person into secure area' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  684,
        "question":  "Which of the following is a \"shoulder surfing\" attack?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Looking at screen over shoulder"
                        },
                        {
                            "key":  "B",
                            "label":  "Listening to conversation"
                        },
                        {
                            "key":  "C",
                            "label":  "Stealing device"
                        },
                        {
                            "key":  "D",
                            "label":  "Hacking network"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Looking at screen over shoulder' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  685,
        "question":  "True or False: \"Dumpster diving\" retrieves discarded sensitive documents.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  686,
        "question":  "What does \"evil maid\" attack refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Physical access to unattended device"
                        },
                        {
                            "key":  "B",
                            "label":  "Email phishing"
                        },
                        {
                            "key":  "C",
                            "label":  "Malware download"
                        },
                        {
                            "key":  "D",
                            "label":  "Network sniffing"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Physical access to unattended device' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  687,
        "question":  "Which of the following is a \"supply chain attack\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Compromising a vendor to target customers"
                        },
                        {
                            "key":  "B",
                            "label":  "Direct hacking of target"
                        },
                        {
                            "key":  "C",
                            "label":  "Physical break-in"
                        },
                        {
                            "key":  "D",
                            "label":  "Insider threat"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Compromising a vendor to target customers' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  688,
        "question":  "True or False: \"Watering hole\" attack compromises websites users visit.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  689,
        "question":  "What does \"man-in-the-middle\" (MitM) attack do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Intercepts communication"
                        },
                        {
                            "key":  "B",
                            "label":  "Steals files"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypts data"
                        },
                        {
                            "key":  "D",
                            "label":  "Deletes logs"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Intercepts communication' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  690,
        "question":  "Which of the following is a \"replay attack\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Capture and retransmit valid data"
                        },
                        {
                            "key":  "B",
                            "label":  "Guess password"
                        },
                        {
                            "key":  "C",
                            "label":  "Overflow buffer"
                        },
                        {
                            "key":  "D",
                            "label":  "Inject code"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Capture and retransmit valid data' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  691,
        "question":  "True or False: \"Session hijacking\" steals user session token.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  692,
        "question":  "What does \"DNS spoofing\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Redirects traffic to fake site"
                        },
                        {
                            "key":  "B",
                            "label":  "Steals DNS records"
                        },
                        {
                            "key":  "C",
                            "label":  "Overloads DNS server"
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypts DNS"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Redirects traffic to fake site' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  693,
        "question":  "Which of the following is a \"ARP spoofing\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Associate attacker's MAC with legitimate IP"
                        },
                        {
                            "key":  "B",
                            "label":  "Poison DNS cache"
                        },
                        {
                            "key":  "C",
                            "label":  "Fake SSL certificate"
                        },
                        {
                            "key":  "D",
                            "label":  "Redirect email"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Associate attacker's MAC with legitimate IP' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  694,
        "question":  "True or False: \"MAC flooding\" overwhelms switch MAC table.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  695,
        "question":  "What does \"VLAN hopping\" exploit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Switch configuration"
                        },
                        {
                            "key":  "B",
                            "label":  "Router firmware"
                        },
                        {
                            "key":  "C",
                            "label":  "Firewall rules"
                        },
                        {
                            "key":  "D",
                            "label":  "User permissions"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Switch configuration' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  696,
        "question":  "Which of the following is a \"rogue access point\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Unauthorized Wi-Fi access point"
                        },
                        {
                            "key":  "B",
                            "label":  "Authorized AP"
                        },
                        {
                            "key":  "C",
                            "label":  "Guest network"
                        },
                        {
                            "key":  "D",
                            "label":  "VPN"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Unauthorized Wi-Fi access point' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  697,
        "question":  "True or False: \"Deauthentication attack\" disconnects users from Wi-Fi.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  698,
        "question":  "What does \"KRACK\" attack target?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "WPA2 protocol"
                        },
                        {
                            "key":  "B",
                            "label":  "WEP"
                        },
                        {
                            "key":  "C",
                            "label":  "WPA3"
                        },
                        {
                            "key":  "D",
                            "label":  "Ethernet"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'WPA2 protocol' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  699,
        "question":  "Which of the following is a \"side-channel attack\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Timing, power consumption, electromagnetic leaks"
                        },
                        {
                            "key":  "B",
                            "label":  "Direct exploit"
                        },
                        {
                            "key":  "C",
                            "label":  "Password guessing"
                        },
                        {
                            "key":  "D",
                            "label":  "Phishing"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Timing, power consumption, electromagnetic leaks' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  700,
        "question":  "True or False: \"Row hammer\" exploits DRAM electrical interference.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  701,
        "question":  "What does \"spectre\" vulnerability exploit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Speculative execution"
                        },
                        {
                            "key":  "B",
                            "label":  "Buffer overflow"
                        },
                        {
                            "key":  "C",
                            "label":  "SQL injection"
                        },
                        {
                            "key":  "D",
                            "label":  "XSS"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Speculative execution' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  702,
        "question":  "Which of the following is a \"meltdown\" vulnerability?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Out-of-order execution"
                        },
                        {
                            "key":  "B",
                            "label":  "Branch prediction"
                        },
                        {
                            "key":  "C",
                            "label":  "Memory leak"
                        },
                        {
                            "key":  "D",
                            "label":  "Integer overflow"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Out-of-order execution' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  703,
        "question":  "True or False: \"Firmware\" attacks persist across OS reinstalls.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  704,
        "question":  "What does \"bootkit\" infect?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Master boot record"
                        },
                        {
                            "key":  "B",
                            "label":  "Operating system"
                        },
                        {
                            "key":  "C",
                            "label":  "Application"
                        },
                        {
                            "key":  "D",
                            "label":  "Driver"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Master boot record' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  705,
        "question":  "Which of the following is a \"rootkit\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Hides malicious activity"
                        },
                        {
                            "key":  "B",
                            "label":  "Detects malware"
                        },
                        {
                            "key":  "C",
                            "label":  "Removes viruses"
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypts files"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Hides malicious activity' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  706,
        "question":  "True or False: \"Kernel-mode\" rootkit has highest privilege.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  707,
        "question":  "What does \"user-mode\" rootkit affect?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Applications only"
                        },
                        {
                            "key":  "B",
                            "label":  "Kernel"
                        },
                        {
                            "key":  "C",
                            "label":  "Boot"
                        },
                        {
                            "key":  "D",
                            "label":  "Firmware"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Applications only' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  708,
        "question":  "Which of the following is a \"backdoor\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Hidden access method"
                        },
                        {
                            "key":  "B",
                            "label":  "Login screen"
                        },
                        {
                            "key":  "C",
                            "label":  "Password reset"
                        },
                        {
                            "key":  "D",
                            "label":  "Logout button"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Hidden access method' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  709,
        "question":  "True or False: \"Logic bomb\" triggers on condition.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  710,
        "question":  "What does \"time bomb\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Triggers at specific time"
                        },
                        {
                            "key":  "B",
                            "label":  "Triggers on user action"
                        },
                        {
                            "key":  "C",
                            "label":  "Triggers on reboot"
                        },
                        {
                            "key":  "D",
                            "label":  "Triggers on install"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Triggers at specific time' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  711,
        "question":  "Which of the following is a \"dropper\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Malware that installs other malware"
                        },
                        {
                            "key":  "B",
                            "label":  "Malware that deletes itself"
                        },
                        {
                            "key":  "C",
                            "label":  "Malware that encrypts"
                        },
                        {
                            "key":  "D",
                            "label":  "Malware that steals"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Malware that installs other malware' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  712,
        "question":  "True or False: \"Downloader\" fetches additional payload.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  713,
        "question":  "What does \"packer\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Compress or encrypt malware to evade detection"
                        },
                        {
                            "key":  "B",
                            "label":  "Package software"
                        },
                        {
                            "key":  "C",
                            "label":  "Install updates"
                        },
                        {
                            "key":  "D",
                            "label":  "Backup data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Compress or encrypt malware to evade detection' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  714,
        "question":  "Which of the following is a \"crypter\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Obfuscates malware"
                        },
                        {
                            "key":  "B",
                            "label":  "Decrypts files"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypts user data"
                        },
                        {
                            "key":  "D",
                            "label":  "Secures communication"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Obfuscates malware' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  715,
        "question":  "True or False: \"Polymorphic malware\" changes its code each infection.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  716,
        "question":  "What does \"metamorphic malware\" change?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Entire code structure"
                        },
                        {
                            "key":  "B",
                            "label":  "Only signatures"
                        },
                        {
                            "key":  "C",
                            "label":  "Only encryption key"
                        },
                        {
                            "key":  "D",
                            "label":  "Only file name"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Entire code structure' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  717,
        "question":  "Which of the following is a \"fileless malware\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Runs in memory, no file written"
                        },
                        {
                            "key":  "B",
                            "label":  "Infected file"
                        },
                        {
                            "key":  "C",
                            "label":  "Macro virus"
                        },
                        {
                            "key":  "D",
                            "label":  "Script virus"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Runs in memory, no file written' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  718,
        "question":  "True or False: \"Living off the land\" uses legitimate tools.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  719,
        "question":  "What does \"LOLBins\" (Living Off the Land Binaries) refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Legitimate OS tools used maliciously"
                        },
                        {
                            "key":  "B",
                            "label":  "Malware binaries"
                        },
                        {
                            "key":  "C",
                            "label":  "Hacking tools"
                        },
                        {
                            "key":  "D",
                            "label":  "Scripts"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Legitimate OS tools used maliciously' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  720,
        "question":  "Which of the following is a \"macro virus\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Infects Office documents"
                        },
                        {
                            "key":  "B",
                            "label":  "Infects boot sector"
                        },
                        {
                            "key":  "C",
                            "label":  "Infects executables"
                        },
                        {
                            "key":  "D",
                            "label":  "Infects scripts"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Infects Office documents' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  721,
        "question":  "True or False: \"Boot sector virus\" infects master boot record.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  722,
        "question":  "What does \"script virus\" use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "VBScript, JavaScript"
                        },
                        {
                            "key":  "B",
                            "label":  "C++"
                        },
                        {
                            "key":  "C",
                            "label":  "Assembly"
                        },
                        {
                            "key":  "D",
                            "label":  "Python"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'VBScript, JavaScript' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  723,
        "question":  "Which of the following is a \"worm\" characteristic?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Self-propagates without user action"
                        },
                        {
                            "key":  "B",
                            "label":  "Needs host file"
                        },
                        {
                            "key":  "C",
                            "label":  "Attached to email"
                        },
                        {
                            "key":  "D",
                            "label":  "Requires download"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Self-propagates without user action' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  724,
        "question":  "True or False: \"Trojan\" disguises as legitimate software.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  725,
        "question":  "What does \"RAT\" (Remote Access Trojan) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Allows remote control"
                        },
                        {
                            "key":  "B",
                            "label":  "Steals passwords"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypts files"
                        },
                        {
                            "key":  "D",
                            "label":  "Deletes data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Allows remote control' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  726,
        "question":  "Which of the following is a \"keylogger\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Records keystrokes"
                        },
                        {
                            "key":  "B",
                            "label":  "Takes screenshots"
                        },
                        {
                            "key":  "C",
                            "label":  "Logs network traffic"
                        },
                        {
                            "key":  "D",
                            "label":  "Monitors clipboard"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Records keystrokes' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  727,
        "question":  "True or False: \"Screen scraper\" captures display content.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  728,
        "question":  "What does \"clipper\" malware do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Replace clipboard contents (crypto addresses)"
                        },
                        {
                            "key":  "B",
                            "label":  "Clip videos"
                        },
                        {
                            "key":  "C",
                            "label":  "Copy files"
                        },
                        {
                            "key":  "D",
                            "label":  "Clear logs"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Replace clipboard contents (crypto addresses)' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  729,
        "question":  "Which of the following is a \"banking trojan\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Steals financial credentials"
                        },
                        {
                            "key":  "B",
                            "label":  "Steals passwords"
                        },
                        {
                            "key":  "C",
                            "label":  "Steals cookies"
                        },
                        {
                            "key":  "D",
                            "label":  "Steals files"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Steals financial credentials' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  730,
        "question":  "True or False: \"Info stealer\" targets credentials, cookies, files.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  731,
        "question":  "What does \"botnet\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Network of compromised devices"
                        },
                        {
                            "key":  "B",
                            "label":  "Single infected device"
                        },
                        {
                            "key":  "C",
                            "label":  "Antivirus software"
                        },
                        {
                            "key":  "D",
                            "label":  "Firewall"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Network of compromised devices' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  732,
        "question":  "Which of the following is a \"C2\" (command and control) server?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Controls botnet"
                        },
                        {
                            "key":  "B",
                            "label":  "Infected user"
                        },
                        {
                            "key":  "C",
                            "label":  "Victim server"
                        },
                        {
                            "key":  "D",
                            "label":  "Backup server"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Controls botnet' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  733,
        "question":  "True or False: \"Zombie\" is a compromised device in botnet.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  734,
        "question":  "What does \"DDoS-as-a-service\" offer?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Rent botnet for attacks"
                        },
                        {
                            "key":  "B",
                            "label":  "Antivirus"
                        },
                        {
                            "key":  "C",
                            "label":  "VPN"
                        },
                        {
                            "key":  "D",
                            "label":  "Proxy"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Rent botnet for attacks' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  735,
        "question":  "Which of the following is a \"amplification attack\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Use small request to generate large response"
                        },
                        {
                            "key":  "B",
                            "label":  "Send many small packets"
                        },
                        {
                            "key":  "C",
                            "label":  "Slowloris"
                        },
                        {
                            "key":  "D",
                            "label":  "Ping of death"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Use small request to generate large response' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  736,
        "question":  "True or False: \"DNS amplification\" exploits open DNS resolvers.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  737,
        "question":  "What does \"NTP amplification\" use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "NTP protocol"
                        },
                        {
                            "key":  "B",
                            "label":  "HTTP"
                        },
                        {
                            "key":  "C",
                            "label":  "DNS"
                        },
                        {
                            "key":  "D",
                            "label":  "SNMP"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'NTP protocol' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  738,
        "question":  "Which of the following is a \"SYN flood\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Send many SYN requests without completing handshake"
                        },
                        {
                            "key":  "B",
                            "label":  "Send UDP packets"
                        },
                        {
                            "key":  "C",
                            "label":  "Send ICMP echo"
                        },
                        {
                            "key":  "D",
                            "label":  "Send HTTP GET"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Send many SYN requests without completing handshake' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  739,
        "question":  "True or False: \"UDP flood\" overwhelms with UDP packets.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  740,
        "question":  "What does \"HTTP flood\" target?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Web server with many requests"
                        },
                        {
                            "key":  "B",
                            "label":  "Network bandwidth"
                        },
                        {
                            "key":  "C",
                            "label":  "DNS server"
                        },
                        {
                            "key":  "D",
                            "label":  "Email server"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Web server with many requests' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  741,
        "question":  "Which of the following is a \"slowloris\" attack?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Open many partial connections"
                        },
                        {
                            "key":  "B",
                            "label":  "High bandwidth"
                        },
                        {
                            "key":  "C",
                            "label":  "Many complete requests"
                        },
                        {
                            "key":  "D",
                            "label":  "Amplification"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Open many partial connections' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  742,
        "question":  "True or False: \"RUDY\" (R U Dead Yet) attack sends incomplete POST.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  743,
        "question":  "What does \"application layer DDoS\" target?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Specific application features"
                        },
                        {
                            "key":  "B",
                            "label":  "Network layer"
                        },
                        {
                            "key":  "C",
                            "label":  "Transport layer"
                        },
                        {
                            "key":  "D",
                            "label":  "Physical layer"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Specific application features' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  744,
        "question":  "Which of the following is a \"DDoS mitigation\" technique?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Rate limiting, blackholing, scrubbing centers"
                        },
                        {
                            "key":  "B",
                            "label":  "More servers only"
                        },
                        {
                            "key":  "C",
                            "label":  "Firewall only"
                        },
                        {
                            "key":  "D",
                            "label":  "IDS only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Rate limiting, blackholing, scrubbing centers' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  745,
        "question":  "True or False: \"Blackhole routing\" drops all traffic to target.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  746,
        "question":  "What does \"scrubbing center\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Filter malicious traffic"
                        },
                        {
                            "key":  "B",
                            "label":  "Block all traffic"
                        },
                        {
                            "key":  "C",
                            "label":  "Allow all traffic"
                        },
                        {
                            "key":  "D",
                            "label":  "Log traffic"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Filter malicious traffic' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  747,
        "question":  "Which of the following is a \"CDN\" DDoS protection benefit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Absorb traffic geographically"
                        },
                        {
                            "key":  "B",
                            "label":  "Single point of failure"
                        },
                        {
                            "key":  "C",
                            "label":  "Slower response"
                        },
                        {
                            "key":  "D",
                            "label":  "Less secure"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Absorb traffic geographically' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  748,
        "question":  "True or False: \"CAPTCHA\" can mitigate bot attacks.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  749,
        "question":  "What does \"Web Application Firewall\" (WAF) inspect?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "HTTP traffic"
                        },
                        {
                            "key":  "B",
                            "label":  "Network packets"
                        },
                        {
                            "key":  "C",
                            "label":  "System calls"
                        },
                        {
                            "key":  "D",
                            "label":  "File system"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'HTTP traffic' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  750,
        "question":  "Which of the following is a \"ModSecurity\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Open source WAF"
                        },
                        {
                            "key":  "B",
                            "label":  "Commercial WAF"
                        },
                        {
                            "key":  "C",
                            "label":  "IDS"
                        },
                        {
                            "key":  "D",
                            "label":  "Firewall"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Open source WAF' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  751,
        "question":  "True or False: \"OWASP Top 10\" lists web application risks.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  752,
        "question":  "What does \"A1\" in OWASP Top 10 (2021) refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Broken Access Control"
                        },
                        {
                            "key":  "B",
                            "label":  "Injection"
                        },
                        {
                            "key":  "C",
                            "label":  "Cryptographic Failures"
                        },
                        {
                            "key":  "D",
                            "label":  "Security Misconfiguration"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Broken Access Control' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  753,
        "question":  "Which of the following is \"injection\" example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "SQL, NoSQL, OS command"
                        },
                        {
                            "key":  "B",
                            "label":  "XSS"
                        },
                        {
                            "key":  "C",
                            "label":  "CSRF"
                        },
                        {
                            "key":  "D",
                            "label":  "SSRF"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'SQL, NoSQL, OS command' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  754,
        "question":  "True or False: \"Cryptographic failures\" include weak hashing.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  755,
        "question":  "What does \"security misconfiguration\" include?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Default credentials, verbose errors"
                        },
                        {
                            "key":  "B",
                            "label":  "Missing patches"
                        },
                        {
                            "key":  "C",
                            "label":  "Open ports"
                        },
                        {
                            "key":  "D",
                            "label":  "All of the above"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "'All of the above' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  756,
        "question":  "Which of the following is \"vulnerable and outdated components\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Libraries with known CVEs"
                        },
                        {
                            "key":  "B",
                            "label":  "Latest version"
                        },
                        {
                            "key":  "C",
                            "label":  "Patched software"
                        },
                        {
                            "key":  "D",
                            "label":  "Secure components"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Libraries with known CVEs' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  757,
        "question":  "True or False: \"Identification and authentication failures\" include weak password policies.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  758,
        "question":  "What does \"software and data integrity failures\" include?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Insecure deserialization"
                        },
                        {
                            "key":  "B",
                            "label":  "SQL injection"
                        },
                        {
                            "key":  "C",
                            "label":  "XSS"
                        },
                        {
                            "key":  "D",
                            "label":  "CSRF"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Insecure deserialization' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  759,
        "question":  "Which of the following is \"security logging and monitoring failures\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Insufficient logging"
                        },
                        {
                            "key":  "B",
                            "label":  "Too much logging"
                        },
                        {
                            "key":  "C",
                            "label":  "No encryption"
                        },
                        {
                            "key":  "D",
                            "label":  "Weak passwords"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Insufficient logging' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  760,
        "question":  "True or False: \"SSRF\" (Server-Side Request Forgery) tricks server into making requests.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  761,
        "question":  "What does \"XXE\" (XML External Entity) attack do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Access local files via XML parser"
                        },
                        {
                            "key":  "B",
                            "label":  "Inject SQL"
                        },
                        {
                            "key":  "C",
                            "label":  "Execute JavaScript"
                        },
                        {
                            "key":  "D",
                            "label":  "Steal cookies"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Access local files via XML parser' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  762,
        "question":  "Which of the following is a \"race condition\" vulnerability?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Timing-dependent outcome"
                        },
                        {
                            "key":  "B",
                            "label":  "Buffer overflow"
                        },
                        {
                            "key":  "C",
                            "label":  "Format string"
                        },
                        {
                            "key":  "D",
                            "label":  "Integer overflow"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Timing-dependent outcome' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  763,
        "question":  "True or False: \"TOCTOU\" (Time of check to time of use) is a race condition.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  764,
        "question":  "What does \"integer overflow\" cause?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Wrap-around to small number"
                        },
                        {
                            "key":  "B",
                            "label":  "Crash only"
                        },
                        {
                            "key":  "C",
                            "label":  "No effect"
                        },
                        {
                            "key":  "D",
                            "label":  "Slower execution"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Wrap-around to small number' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  765,
        "question":  "Which of the following is a \"buffer overflow\" result?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Memory corruption, code execution"
                        },
                        {
                            "key":  "B",
                            "label":  "Data loss"
                        },
                        {
                            "key":  "C",
                            "label":  "Network error"
                        },
                        {
                            "key":  "D",
                            "label":  "Disk full"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Memory corruption, code execution' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  766,
        "question":  "True or False: \"Format string vulnerability\" allows arbitrary memory read/write.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  767,
        "question":  "What does \"use-after-free\" vulnerability exploit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Access freed memory"
                        },
                        {
                            "key":  "B",
                            "label":  "Double free"
                        },
                        {
                            "key":  "C",
                            "label":  "Memory leak"
                        },
                        {
                            "key":  "D",
                            "label":  "Null pointer"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Access freed memory' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  768,
        "question":  "Which of the following is a \"double free\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Free same memory twice"
                        },
                        {
                            "key":  "B",
                            "label":  "Free NULL"
                        },
                        {
                            "key":  "C",
                            "label":  "Free unallocated"
                        },
                        {
                            "key":  "D",
                            "label":  "Free constant"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Free same memory twice' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  769,
        "question":  "True or False: \"Memory leak\" eventually exhausts memory.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  770,
        "question":  "What does \"null pointer dereference\" cause?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Crash (segfault)"
                        },
                        {
                            "key":  "B",
                            "label":  "Code execution"
                        },
                        {
                            "key":  "C",
                            "label":  "Data corruption"
                        },
                        {
                            "key":  "D",
                            "label":  "Silent failure"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Crash (segfault)' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  771,
        "question":  "Which of the following is a \"type confusion\" vulnerability?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Misinterpret object type"
                        },
                        {
                            "key":  "B",
                            "label":  "Wrong variable type"
                        },
                        {
                            "key":  "C",
                            "label":  "Missing type"
                        },
                        {
                            "key":  "D",
                            "label":  "Extra type"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Misinterpret object type' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  772,
        "question":  "True or False: \"Privilege escalation\" gains higher access.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  773,
        "question":  "What does \"horizontal privilege escalation\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Access same level other user's data"
                        },
                        {
                            "key":  "B",
                            "label":  "Access admin functions"
                        },
                        {
                            "key":  "C",
                            "label":  "Access system files"
                        },
                        {
                            "key":  "D",
                            "label":  "Access network"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Access same level other user's data' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  774,
        "question":  "Which of the following is \"vertical privilege escalation\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Gain higher privileges (e.g., user to admin)"
                        },
                        {
                            "key":  "B",
                            "label":  "Access another user"
                        },
                        {
                            "key":  "C",
                            "label":  "Access public data"
                        },
                        {
                            "key":  "D",
                            "label":  "Access logs"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Gain higher privileges (e.g., user to admin)' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  775,
        "question":  "True or False: \"Insecure direct object reference\" (IDOR) allows unauthorized access by modifying identifier.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  776,
        "question":  "What does \"path traversal\" (directory traversal) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Access files outside web root"
                        },
                        {
                            "key":  "B",
                            "label":  "Access database"
                        },
                        {
                            "key":  "C",
                            "label":  "Access network"
                        },
                        {
                            "key":  "D",
                            "label":  "Access memory"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Access files outside web root' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  777,
        "question":  "Which of the following is a \"../\" (dot-dot-slash) attack?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Path traversal"
                        },
                        {
                            "key":  "B",
                            "label":  "SQL injection"
                        },
                        {
                            "key":  "C",
                            "label":  "XSS"
                        },
                        {
                            "key":  "D",
                            "label":  "CSRF"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Path traversal' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  778,
        "question":  "True or False: \"File inclusion\" (LFI/RFI) includes local or remote files.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  779,
        "question":  "What does \"remote file inclusion\" (RFI) allow?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Execute remote code"
                        },
                        {
                            "key":  "B",
                            "label":  "Read local file"
                        },
                        {
                            "key":  "C",
                            "label":  "Delete file"
                        },
                        {
                            "key":  "D",
                            "label":  "Write file"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Execute remote code' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  780,
        "question":  "Which of the following is a \"local file inclusion\" (LFI) impact?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Read sensitive files"
                        },
                        {
                            "key":  "B",
                            "label":  "Execute remote code"
                        },
                        {
                            "key":  "C",
                            "label":  "Steal cookies"
                        },
                        {
                            "key":  "D",
                            "label":  "Logout"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Read sensitive files' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  781,
        "question":  "True or False: \"Server-side template injection\" (SSTI) can lead to RCE.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  782,
        "question":  "What does \"client-side template injection\" (CSTI) affect?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "XSS"
                        },
                        {
                            "key":  "B",
                            "label":  "RCE"
                        },
                        {
                            "key":  "C",
                            "label":  "SSRF"
                        },
                        {
                            "key":  "D",
                            "label":  "SQLi"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'XSS' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  783,
        "question":  "Which of the following is a \"cross-site scripting\" (XSS) type?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Stored, Reflected, DOM-based"
                        },
                        {
                            "key":  "B",
                            "label":  "SQL, NoSQL"
                        },
                        {
                            "key":  "C",
                            "label":  "LDAP"
                        },
                        {
                            "key":  "D",
                            "label":  "XPath"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Stored, Reflected, DOM-based' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  784,
        "question":  "True or False: \"Stored XSS\" persists in database.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  785,
        "question":  "What does \"reflected XSS\" require?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "User clicks crafted link"
                        },
                        {
                            "key":  "B",
                            "label":  "User logs in"
                        },
                        {
                            "key":  "C",
                            "label":  "User uploads file"
                        },
                        {
                            "key":  "D",
                            "label":  "User changes password"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'User clicks crafted link' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  786,
        "question":  "Which of the following is \"DOM-based XSS\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Client-side JavaScript vulnerability"
                        },
                        {
                            "key":  "B",
                            "label":  "Server-side vulnerability"
                        },
                        {
                            "key":  "C",
                            "label":  "Database vulnerability"
                        },
                        {
                            "key":  "D",
                            "label":  "Network vulnerability"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Client-side JavaScript vulnerability' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  787,
        "question":  "True or False: \"CSP\" (Content Security Policy) is effective against XSS.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  788,
        "question":  "What does \"cross-site request forgery\" (CSRF) trick user into?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Unwanted actions on authenticated site"
                        },
                        {
                            "key":  "B",
                            "label":  "Clicking ads"
                        },
                        {
                            "key":  "C",
                            "label":  "Downloading malware"
                        },
                        {
                            "key":  "D",
                            "label":  "Changing password on own site"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Unwanted actions on authenticated site' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  789,
        "question":  "Which of the following is a \"CSRF token\" defense?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Unique token per request"
                        },
                        {
                            "key":  "B",
                            "label":  "SameSite cookies"
                        },
                        {
                            "key":  "C",
                            "label":  "Referer header check"
                        },
                        {
                            "key":  "D",
                            "label":  "All of the above"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "'All of the above' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  790,
        "question":  "True or False: \"SameSite=Lax\" cookie mitigates CSRF.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  791,
        "question":  "What does \"clickjacking\" (UI redress) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Trick user into clicking hidden elements"
                        },
                        {
                            "key":  "B",
                            "label":  "Steal clicks"
                        },
                        {
                            "key":  "C",
                            "label":  "Overlay ads"
                        },
                        {
                            "key":  "D",
                            "label":  "Change colors"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Trick user into clicking hidden elements' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  792,
        "question":  "Which of the following prevents clickjacking?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "X-Frame-Options"
                        },
                        {
                            "key":  "B",
                            "label":  "CSP"
                        },
                        {
                            "key":  "C",
                            "label":  "CORS"
                        },
                        {
                            "key":  "D",
                            "label":  "HSTS"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'X-Frame-Options' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  793,
        "question":  "True or False: \"Frame-ancestors\" CSP directive controls embedding.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  794,
        "question":  "What does \"tabnabbing\" attack do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Replace inactive tab with phishing page"
                        },
                        {
                            "key":  "B",
                            "label":  "Steal tabs"
                        },
                        {
                            "key":  "C",
                            "label":  "Close tabs"
                        },
                        {
                            "key":  "D",
                            "label":  "Duplicate tabs"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Replace inactive tab with phishing page' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  795,
        "question":  "Which of the following is a \"reverse tabnabbing\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Target page controls opener tab"
                        },
                        {
                            "key":  "B",
                            "label":  "Open new tab"
                        },
                        {
                            "key":  "C",
                            "label":  "Close tab"
                        },
                        {
                            "key":  "D",
                            "label":  "Refresh tab"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Target page controls opener tab' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  796,
        "question":  "True or False: \"rel=noopener\" prevents reverse tabnabbing.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  797,
        "question":  "What does \"web cache poisoning\" achieve?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Inject malicious content into cache"
                        },
                        {
                            "key":  "B",
                            "label":  "Poison database"
                        },
                        {
                            "key":  "C",
                            "label":  "Poison logs"
                        },
                        {
                            "key":  "D",
                            "label":  "Poison memory"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Inject malicious content into cache' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  798,
        "question":  "Which of the following is a \"cache deception\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Trick cache to store sensitive user data"
                        },
                        {
                            "key":  "B",
                            "label":  "Trick user"
                        },
                        {
                            "key":  "C",
                            "label":  "Trick server"
                        },
                        {
                            "key":  "D",
                            "label":  "Trick network"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Trick cache to store sensitive user data' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  799,
        "question":  "True or False: \"HTTP request smuggling\" exploits desync between frontend and backend.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  800,
        "question":  "What does \"HTTP response splitting\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Inject headers"
                        },
                        {
                            "key":  "B",
                            "label":  "Split request"
                        },
                        {
                            "key":  "C",
                            "label":  "Split response"
                        },
                        {
                            "key":  "D",
                            "label":  "Split connection"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Inject headers' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  801,
        "question":  "Which of the following is a \"CRLF injection\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Carriage return line feed injection"
                        },
                        {
                            "key":  "B",
                            "label":  "SQL injection"
                        },
                        {
                            "key":  "C",
                            "label":  "XSS"
                        },
                        {
                            "key":  "D",
                            "label":  "CSRF"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Carriage return line feed injection' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  802,
        "question":  "True or False: \"Host header injection\" can lead to password reset poisoning.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  803,
        "question":  "What does \"password reset poisoning\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Trick user into resetting password to attacker-controlled link"
                        },
                        {
                            "key":  "B",
                            "label":  "Steal password"
                        },
                        {
                            "key":  "C",
                            "label":  "Guess password"
                        },
                        {
                            "key":  "D",
                            "label":  "Logout user"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Trick user into resetting password to attacker-controlled link' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  804,
        "question":  "Which of the following is a \"OAuth\" misconfiguration?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Improper redirect_uri validation"
                        },
                        {
                            "key":  "B",
                            "label":  "Strong secrets"
                        },
                        {
                            "key":  "C",
                            "label":  "Short tokens"
                        },
                        {
                            "key":  "D",
                            "label":  "PKCE"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Improper redirect_uri validation' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  805,
        "question":  "True or False: \"JWT none\" algorithm attack bypasses signature.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  806,
        "question":  "What does \"JWT algorithm confusion\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Trick server to use wrong algorithm"
                        },
                        {
                            "key":  "B",
                            "label":  "Steal JWT"
                        },
                        {
                            "key":  "C",
                            "label":  "Decode JWT"
                        },
                        {
                            "key":  "D",
                            "label":  "Replay JWT"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Trick server to use wrong algorithm' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  807,
        "question":  "Which of the following is a \"GraphQL introspection\" risk?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Reveals schema"
                        },
                        {
                            "key":  "B",
                            "label":  "Slows query"
                        },
                        {
                            "key":  "C",
                            "label":  "Injects code"
                        },
                        {
                            "key":  "D",
                            "label":  "Steals data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Reveals schema' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  808,
        "question":  "True or False: \"GraphQL batching attack\" overwhelms server with many queries.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  809,
        "question":  "What does \"rate limiting\" prevent in APIs?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Brute force, DDoS"
                        },
                        {
                            "key":  "B",
                            "label":  "Slow response"
                        },
                        {
                            "key":  "C",
                            "label":  "Caching"
                        },
                        {
                            "key":  "D",
                            "label":  "Logging"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Brute force, DDoS' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  810,
        "question":  "Which of the following is a \"API key\" exposure risk?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Leaked in client-side code"
                        },
                        {
                            "key":  "B",
                            "label":  "Stored securely"
                        },
                        {
                            "key":  "C",
                            "label":  "Rotated regularly"
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypted"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Leaked in client-side code' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  811,
        "question":  "True or False: \"HMAC\" (Hash-based Message Authentication Code) verifies integrity and authenticity.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  812,
        "question":  "What does \"TLS\" (Transport Layer Security) provide?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Encryption and authentication"
                        },
                        {
                            "key":  "B",
                            "label":  "Compression"
                        },
                        {
                            "key":  "C",
                            "label":  "Caching"
                        },
                        {
                            "key":  "D",
                            "label":  "Routing"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Encryption and authentication' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  813,
        "question":  "Which of the following is a \"certificate pinning\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Associate host with expected certificate"
                        },
                        {
                            "key":  "B",
                            "label":  "Renew certificate"
                        },
                        {
                            "key":  "C",
                            "label":  "Revoke certificate"
                        },
                        {
                            "key":  "D",
                            "label":  "Generate certificate"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Associate host with expected certificate' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  814,
        "question":  "True or False: \"Let's Encrypt\" provides free SSL/TLS certificates.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  815,
        "question":  "What does \"mTLS\" (mutual TLS) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Both client and server authenticate"
                        },
                        {
                            "key":  "B",
                            "label":  "Only server authenticates"
                        },
                        {
                            "key":  "C",
                            "label":  "Only client authenticates"
                        },
                        {
                            "key":  "D",
                            "label":  "No authentication"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Both client and server authenticate' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  816,
        "question":  "Which of the following is a \"certificate transparency\" log?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Public log of issued certificates"
                        },
                        {
                            "key":  "B",
                            "label":  "Private key storage"
                        },
                        {
                            "key":  "C",
                            "label":  "Certificate revocation list"
                        },
                        {
                            "key":  "D",
                            "label":  "Certificate authority"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Public log of issued certificates' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  817,
        "question":  "True or False: \"OCSP\" (Online Certificate Status Protocol) checks certificate revocation.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  818,
        "question":  "What does \"CRL\" (Certificate Revocation List) contain?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Revoked certificates"
                        },
                        {
                            "key":  "B",
                            "label":  "Valid certificates"
                        },
                        {
                            "key":  "C",
                            "label":  "All certificates"
                        },
                        {
                            "key":  "D",
                            "label":  "Expired certificates"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Revoked certificates' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  819,
        "question":  "Which of the following is a \"key rotation\" best practice?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Regularly change cryptographic keys"
                        },
                        {
                            "key":  "B",
                            "label":  "Never change keys"
                        },
                        {
                            "key":  "C",
                            "label":  "Use same key forever"
                        },
                        {
                            "key":  "D",
                            "label":  "Share keys publicly"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Regularly change cryptographic keys' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  820,
        "question":  "True or False: \"Hardware Security Module\" (HSM) securely manages keys.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  821,
        "question":  "What does \"TPM\" (Trusted Platform Module) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Hardware-based cryptographic operations"
                        },
                        {
                            "key":  "B",
                            "label":  "Software encryption"
                        },
                        {
                            "key":  "C",
                            "label":  "Password manager"
                        },
                        {
                            "key":  "D",
                            "label":  "Firewall"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Hardware-based cryptographic operations' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  822,
        "question":  "Which of the following is a \"secure enclave\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Isolated area in processor"
                        },
                        {
                            "key":  "B",
                            "label":  "External HSM"
                        },
                        {
                            "key":  "C",
                            "label":  "Software vault"
                        },
                        {
                            "key":  "D",
                            "label":  "Cloud KMS"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Isolated area in processor' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  823,
        "question":  "True or False: \"Key derivation function\" (KDF) derives keys from passwords.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  824,
        "question":  "What does \"PBKDF2\" stand for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Password-Based Key Derivation Function 2"
                        },
                        {
                            "key":  "B",
                            "label":  "Public Basic Key Derivation"
                        },
                        {
                            "key":  "C",
                            "label":  "Private Block Key Distribution"
                        },
                        {
                            "key":  "D",
                            "label":  "Plaintext Backup Key Derivation"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Password-Based Key Derivation Function 2' is the correct expansion. Knowing the precise meaning of this acronym is core TPM literacy when communicating with engineering and stakeholders."
    },
    {
        "id":  825,
        "question":  "Which of the following is a \"bcrypt\" feature?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Adaptive cost, salt included"
                        },
                        {
                            "key":  "B",
                            "label":  "Fast hashing"
                        },
                        {
                            "key":  "C",
                            "label":  "No salt"
                        },
                        {
                            "key":  "D",
                            "label":  "Fixed cost"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Adaptive cost, salt included' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  826,
        "question":  "True or False: \"Argon2\" won Password Hashing Competition.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  827,
        "question":  "What does \"scrypt\" use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Memory-hard function"
                        },
                        {
                            "key":  "B",
                            "label":  "CPU-only"
                        },
                        {
                            "key":  "C",
                            "label":  "No memory"
                        },
                        {
                            "key":  "D",
                            "label":  "Fixed memory"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Memory-hard function' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  828,
        "question":  "Which of the following is a \"salt\" purpose?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Prevent rainbow table attacks"
                        },
                        {
                            "key":  "B",
                            "label":  "Encrypt data"
                        },
                        {
                            "key":  "C",
                            "label":  "Compress data"
                        },
                        {
                            "key":  "D",
                            "label":  "Authenticate data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Prevent rainbow table attacks' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  829,
        "question":  "True or False: \"Pepper\" is a secret key added to hash.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  830,
        "question":  "What does \"secure random number generator\" ensure?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Unpredictability"
                        },
                        {
                            "key":  "B",
                            "label":  "Speed"
                        },
                        {
                            "key":  "C",
                            "label":  "Small output"
                        },
                        {
                            "key":  "D",
                            "label":  "Repeatability"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Unpredictability' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  831,
        "question":  "Which of the following is a \"UUID v4\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Random UUID"
                        },
                        {
                            "key":  "B",
                            "label":  "Timestamp-based UUID"
                        },
                        {
                            "key":  "C",
                            "label":  "Namespace-based"
                        },
                        {
                            "key":  "D",
                            "label":  "Sequential"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Random UUID' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  832,
        "question":  "True or False: \"Predictable tokens\" are a security risk.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  833,
        "question":  "What does \"entropy\" measure in cryptography?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Randomness"
                        },
                        {
                            "key":  "B",
                            "label":  "Key length"
                        },
                        {
                            "key":  "C",
                            "label":  "Algorithm strength"
                        },
                        {
                            "key":  "D",
                            "label":  "Hash size"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Randomness' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  834,
        "question":  "Which of the following is a \"quantum-resistant\" algorithm?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Lattice-based cryptography"
                        },
                        {
                            "key":  "B",
                            "label":  "RSA"
                        },
                        {
                            "key":  "C",
                            "label":  "ECC"
                        },
                        {
                            "key":  "D",
                            "label":  "AES"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Lattice-based cryptography' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  835,
        "question":  "True or False: \"Post-quantum cryptography\" prepares for quantum computers.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  836,
        "question":  "What does \"NIST\" do for cryptography?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Standardizes algorithms"
                        },
                        {
                            "key":  "B",
                            "label":  "Sells keys"
                        },
                        {
                            "key":  "C",
                            "label":  "Hacks systems"
                        },
                        {
                            "key":  "D",
                            "label":  "Teaches crypto"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Standardizes algorithms' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  837,
        "question":  "Which of the following is an \"AES\" key size?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "256 bits"
                        },
                        {
                            "key":  "B",
                            "label":  "512 bits"
                        },
                        {
                            "key":  "C",
                            "label":  "128 bits"
                        },
                        {
                            "key":  "D",
                            "label":  "Both 128 and 256"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "'Both 128 and 256' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  838,
        "question":  "True or False: \"RSA\" is asymmetric encryption.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  839,
        "question":  "What does \"ECC\" (Elliptic Curve Cryptography) offer?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Smaller keys than RSA for same security"
                        },
                        {
                            "key":  "B",
                            "label":  "Faster than RSA"
                        },
                        {
                            "key":  "C",
                            "label":  "Less memory"
                        },
                        {
                            "key":  "D",
                            "label":  "All of the above"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "'All of the above' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  840,
        "question":  "Which of the following is a \"diffie-hellman\" key exchange?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Establish shared secret over insecure channel"
                        },
                        {
                            "key":  "B",
                            "label":  "Encrypt data"
                        },
                        {
                            "key":  "C",
                            "label":  "Sign data"
                        },
                        {
                            "key":  "D",
                            "label":  "Hash data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Establish shared secret over insecure channel' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  841,
        "question":  "True or False: \"Perfect forward secrecy\" (PFS) protects past sessions if key compromised.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  842,
        "question":  "What does \"digital signature\" provide?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Non-repudiation and integrity"
                        },
                        {
                            "key":  "B",
                            "label":  "Confidentiality"
                        },
                        {
                            "key":  "C",
                            "label":  "Compression"
                        },
                        {
                            "key":  "D",
                            "label":  "Authentication only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Non-repudiation and integrity' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  843,
        "question":  "Which of the following is a \"DSA\" (Digital Signature Algorithm)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Signature algorithm"
                        },
                        {
                            "key":  "B",
                            "label":  "Encryption algorithm"
                        },
                        {
                            "key":  "C",
                            "label":  "Hash algorithm"
                        },
                        {
                            "key":  "D",
                            "label":  "Key exchange"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Signature algorithm' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  844,
        "question":  "True or False: \"ECDSA\" is elliptic curve DSA.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  845,
        "question":  "What does \"Ed25519\" refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Edwards-curve signature"
                        },
                        {
                            "key":  "B",
                            "label":  "AES mode"
                        },
                        {
                            "key":  "C",
                            "label":  "RSA variant"
                        },
                        {
                            "key":  "D",
                            "label":  "Hash function"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Edwards-curve signature' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  846,
        "question":  "Which of the following is a \"hash function\" property?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "One-way, collision-resistant"
                        },
                        {
                            "key":  "B",
                            "label":  "Reversible"
                        },
                        {
                            "key":  "C",
                            "label":  "Fast encryption"
                        },
                        {
                            "key":  "D",
                            "label":  "Keyed"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'One-way, collision-resistant' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  847,
        "question":  "True or False: \"SHA-256\" outputs 256 bits.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  848,
        "question":  "What does \"collision attack\" on hash find?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Two different inputs with same hash"
                        },
                        {
                            "key":  "B",
                            "label":  "Preimage"
                        },
                        {
                            "key":  "C",
                            "label":  "Second preimage"
                        },
                        {
                            "key":  "D",
                            "label":  "Key"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Two different inputs with same hash' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  849,
        "question":  "Which of the following is a \"length extension attack\" possible on?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Merkle-Damgård hashes (SHA-1, SHA-2)"
                        },
                        {
                            "key":  "B",
                            "label":  "SHA-3"
                        },
                        {
                            "key":  "C",
                            "label":  "BLAKE2"
                        },
                        {
                            "key":  "D",
                            "label":  "Keccak"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Merkle-Damgård hashes (SHA-1, SHA-2)' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  850,
        "question":  "True or False: \"HMAC\" prevents length extension.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  851,
        "question":  "What does \"SHA-3\" based on?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Sponge construction"
                        },
                        {
                            "key":  "B",
                            "label":  "Merkle-Damgård"
                        },
                        {
                            "key":  "C",
                            "label":  "Feistel network"
                        },
                        {
                            "key":  "D",
                            "label":  "AES"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Sponge construction' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  852,
        "question":  "Which of the following is a \"BLAKE2\" feature?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Faster than SHA-3"
                        },
                        {
                            "key":  "B",
                            "label":  "Less secure"
                        },
                        {
                            "key":  "C",
                            "label":  "No key"
                        },
                        {
                            "key":  "D",
                            "label":  "Fixed output"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Faster than SHA-3' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  853,
        "question":  "True or False: \"Message Authentication Code\" (MAC) verifies integrity and authenticity.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  854,
        "question":  "What does \"AEAD\" (Authenticated Encryption with Associated Data) provide?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Encryption and authentication together"
                        },
                        {
                            "key":  "B",
                            "label":  "Only encryption"
                        },
                        {
                            "key":  "C",
                            "label":  "Only authentication"
                        },
                        {
                            "key":  "D",
                            "label":  "Compression"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Encryption and authentication together' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  855,
        "question":  "Which of the following is an AEAD mode?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "GCM (Galois/Counter Mode)"
                        },
                        {
                            "key":  "B",
                            "label":  "ECB"
                        },
                        {
                            "key":  "C",
                            "label":  "CBC"
                        },
                        {
                            "key":  "D",
                            "label":  "CFB"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'GCM (Galois/Counter Mode)' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  856,
        "question":  "True or False: \"ChaCha20-Poly1305\" is an AEAD.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  857,
        "question":  "What does \"nonce\" (number used once) prevent?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Replay attacks"
                        },
                        {
                            "key":  "B",
                            "label":  "Brute force"
                        },
                        {
                            "key":  "C",
                            "label":  "Hash collisions"
                        },
                        {
                            "key":  "D",
                            "label":  "Side channels"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Replay attacks' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  858,
        "question":  "Which of the following is a \"IV\" (Initialization Vector) purpose?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Randomize encryption"
                        },
                        {
                            "key":  "B",
                            "label":  "Encrypt data"
                        },
                        {
                            "key":  "C",
                            "label":  "Hash data"
                        },
                        {
                            "key":  "D",
                            "label":  "Sign data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Randomize encryption' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  859,
        "question":  "True or False: \"IV\" must be unique per encryption but not secret.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  860,
        "question":  "What does \"CBC\" mode require?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Padding"
                        },
                        {
                            "key":  "B",
                            "label":  "No padding"
                        },
                        {
                            "key":  "C",
                            "label":  "Counter"
                        },
                        {
                            "key":  "D",
                            "label":  "Random access"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Padding' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  861,
        "question":  "Which of the following is a \"CTR\" mode advantage?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Parallelizable"
                        },
                        {
                            "key":  "B",
                            "label":  "Padding required"
                        },
                        {
                            "key":  "C",
                            "label":  "Sequential only"
                        },
                        {
                            "key":  "D",
                            "label":  "Slower"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Parallelizable' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  862,
        "question":  "True or False: \"ECB\" mode is insecure for most data.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  863,
        "question":  "What does \"GCM\" combine?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Counter mode and GHASH authentication"
                        },
                        {
                            "key":  "B",
                            "label":  "CBC and HMAC"
                        },
                        {
                            "key":  "C",
                            "label":  "CFB and MAC"
                        },
                        {
                            "key":  "D",
                            "label":  "OFB and SHA"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Counter mode and GHASH authentication' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  864,
        "question":  "Which of the following is a \"CCM\" mode?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "CTR with CBC-MAC"
                        },
                        {
                            "key":  "B",
                            "label":  "GCM"
                        },
                        {
                            "key":  "C",
                            "label":  "CBC"
                        },
                        {
                            "key":  "D",
                            "label":  "ECB"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'CTR with CBC-MAC' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  865,
        "question":  "True or False: \"XTS\" mode is for disk encryption.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  866,
        "question":  "What does \"FIPS 140-2\" certify?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Cryptographic module security"
                        },
                        {
                            "key":  "B",
                            "label":  "Hash algorithm"
                        },
                        {
                            "key":  "C",
                            "label":  "Encryption standard"
                        },
                        {
                            "key":  "D",
                            "label":  "Key length"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Cryptographic module security' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  867,
        "question":  "Which of the following is a \"Common Criteria\" evaluation?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Security certification"
                        },
                        {
                            "key":  "B",
                            "label":  "Performance test"
                        },
                        {
                            "key":  "C",
                            "label":  "Usability test"
                        },
                        {
                            "key":  "D",
                            "label":  "Compatibility test"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Security certification' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  868,
        "question":  "True or False: \"PCI DSS\" applies to cardholder data environment.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  869,
        "question":  "What does \"SOC 2 Type II\" report over?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Period of time (e.g., 6 months)"
                        },
                        {
                            "key":  "B",
                            "label":  "Point in time"
                        },
                        {
                            "key":  "C",
                            "label":  "Design only"
                        },
                        {
                            "key":  "D",
                            "label":  "Controls list"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Period of time (e.g., 6 months)' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  870,
        "question":  "Which of the following is a \"ISO 27701\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Privacy extension to ISO 27001"
                        },
                        {
                            "key":  "B",
                            "label":  "Quality standard"
                        },
                        {
                            "key":  "C",
                            "label":  "Environmental standard"
                        },
                        {
                            "key":  "D",
                            "label":  "Safety standard"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Privacy extension to ISO 27001' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  871,
        "question":  "True or False: \"NIST CSF\" (Cybersecurity Framework) is voluntary.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  872,
        "question":  "What does \"CIS Controls\" prioritize?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Top 18 critical security controls"
                        },
                        {
                            "key":  "B",
                            "label":  "All controls"
                        },
                        {
                            "key":  "C",
                            "label":  "Lowest cost controls"
                        },
                        {
                            "key":  "D",
                            "label":  "Newest controls"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Top 18 critical security controls' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  873,
        "question":  "Which of the following is a \"COBIT\" framework for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "IT governance and management"
                        },
                        {
                            "key":  "B",
                            "label":  "Security only"
                        },
                        {
                            "key":  "C",
                            "label":  "Privacy only"
                        },
                        {
                            "key":  "D",
                            "label":  "Development only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'IT governance and management' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  874,
        "question":  "True or False: \"ITIL\" focuses on IT service management.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  875,
        "question":  "What does \"DevSecOps\" integrate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Security into DevOps"
                        },
                        {
                            "key":  "B",
                            "label":  "Development and operations"
                        },
                        {
                            "key":  "C",
                            "label":  "Testing and deployment"
                        },
                        {
                            "key":  "D",
                            "label":  "Monitoring and logging"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Security into DevOps' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  876,
        "question":  "Which of the following is a \"shift left\" principle?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Move security earlier in SDLC"
                        },
                        {
                            "key":  "B",
                            "label":  "Move security to production"
                        },
                        {
                            "key":  "C",
                            "label":  "Move security to operations"
                        },
                        {
                            "key":  "D",
                            "label":  "Move security to planning"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Move security earlier in SDLC' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  877,
        "question":  "True or False: \"SAST\" (Static Analysis) scans source code.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  878,
        "question":  "What does \"DAST\" (Dynamic Analysis) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Scans running application"
                        },
                        {
                            "key":  "B",
                            "label":  "Scans source code"
                        },
                        {
                            "key":  "C",
                            "label":  "Scans dependencies"
                        },
                        {
                            "key":  "D",
                            "label":  "Scans containers"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Scans running application' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  879,
        "question":  "Which of the following is \"IAST\" (Interactive Analysis)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Combines SAST and DAST"
                        },
                        {
                            "key":  "B",
                            "label":  "Only static"
                        },
                        {
                            "key":  "C",
                            "label":  "Only dynamic"
                        },
                        {
                            "key":  "D",
                            "label":  "Only manual"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Combines SAST and DAST' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  880,
        "question":  "True or False: \"RASP\" (Runtime Application Self-Protection) protects inside app.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  881,
        "question":  "What does \"SCA\" (Software Composition Analysis) detect?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Vulnerable open source dependencies"
                        },
                        {
                            "key":  "B",
                            "label":  "Code bugs"
                        },
                        {
                            "key":  "C",
                            "label":  "Config errors"
                        },
                        {
                            "key":  "D",
                            "label":  "Network flaws"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Vulnerable open source dependencies' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  882,
        "question":  "Which of the following is a \"dependency check\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "OWASP Dependency-Check"
                        },
                        {
                            "key":  "B",
                            "label":  "Nmap"
                        },
                        {
                            "key":  "C",
                            "label":  "Wireshark"
                        },
                        {
                            "key":  "D",
                            "label":  "Metasploit"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'OWASP Dependency-Check' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  883,
        "question":  "True or False: \"Container scanning\" finds vulnerabilities in images.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  884,
        "question":  "What does \"Kubernetes security\" include?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "RBAC, network policies, pod security"
                        },
                        {
                            "key":  "B",
                            "label":  "Only secrets"
                        },
                        {
                            "key":  "C",
                            "label":  "Only images"
                        },
                        {
                            "key":  "D",
                            "label":  "Only logs"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'RBAC, network policies, pod security' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  885,
        "question":  "Which of the following is a \"pod security admission\" (PSA) standard?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Privileged, Baseline, Restricted"
                        },
                        {
                            "key":  "B",
                            "label":  "High, Medium, Low"
                        },
                        {
                            "key":  "C",
                            "label":  "Allow, Deny, Log"
                        },
                        {
                            "key":  "D",
                            "label":  "Enforce, Audit, Warn"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Privileged, Baseline, Restricted' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  886,
        "question":  "True or False: \"NetworkPolicy\" in Kubernetes restricts pod communication.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  887,
        "question":  "What does \"service mesh\" (e.g., Istio) provide?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Security (mTLS), observability, traffic control"
                        },
                        {
                            "key":  "B",
                            "label":  "Container runtime"
                        },
                        {
                            "key":  "C",
                            "label":  "Orchestration"
                        },
                        {
                            "key":  "D",
                            "label":  "CI/CD"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Security (mTLS), observability, traffic control' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  888,
        "question":  "Which of the following is a \"zero-trust network access\" (ZTNA) principle?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Verify every request, least privilege"
                        },
                        {
                            "key":  "B",
                            "label":  "Trust internal network"
                        },
                        {
                            "key":  "C",
                            "label":  "Trust VPN"
                        },
                        {
                            "key":  "D",
                            "label":  "Trust IP address"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Verify every request, least privilege' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  889,
        "question":  "True or False: \"BeyondCorp\" is Google's zero-trust implementation.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  890,
        "question":  "What does \"SASE\" (Secure Access Service Edge) combine?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Network and security as cloud service"
                        },
                        {
                            "key":  "B",
                            "label":  "VPN and firewall"
                        },
                        {
                            "key":  "C",
                            "label":  "SD-WAN and CASB"
                        },
                        {
                            "key":  "D",
                            "label":  "All of the above"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "'All of the above' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  891,
        "question":  "Which of the following is a \"CASB\" (Cloud Access Security Broker) function?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Visibility, compliance, threat protection"
                        },
                        {
                            "key":  "B",
                            "label":  "IAM only"
                        },
                        {
                            "key":  "C",
                            "label":  "Encryption only"
                        },
                        {
                            "key":  "D",
                            "label":  "DDoS protection"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Visibility, compliance, threat protection' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  892,
        "question":  "True or False: \"SWG\" (Secure Web Gateway) filters web traffic.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  893,
        "question":  "What does \"DLP\" (Data Loss Prevention) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Prevent sensitive data exfiltration"
                        },
                        {
                            "key":  "B",
                            "label":  "Encrypt all data"
                        },
                        {
                            "key":  "C",
                            "label":  "Backup data"
                        },
                        {
                            "key":  "D",
                            "label":  "Compress data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Prevent sensitive data exfiltration' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  894,
        "question":  "Which of the following is a \"IRM\" (Insider Risk Management) focus?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Detect malicious or negligent insiders"
                        },
                        {
                            "key":  "B",
                            "label":  "External attackers"
                        },
                        {
                            "key":  "C",
                            "label":  "Natural disasters"
                        },
                        {
                            "key":  "D",
                            "label":  "Hardware failure"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Detect malicious or negligent insiders' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  895,
        "question":  "True or False: \"UEBA\" uses machine learning for anomaly detection.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  896,
        "question":  "What does \"SOAR\" automate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Incident response workflows"
                        },
                        {
                            "key":  "B",
                            "label":  "Penetration testing"
                        },
                        {
                            "key":  "C",
                            "label":  "Compliance reporting"
                        },
                        {
                            "key":  "D",
                            "label":  "Vulnerability scanning"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Incident response workflows' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  897,
        "question":  "Which of the following is a \"MISP\" (Malware Information Sharing Platform) for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Threat intelligence sharing"
                        },
                        {
                            "key":  "B",
                            "label":  "Antivirus"
                        },
                        {
                            "key":  "C",
                            "label":  "Firewall"
                        },
                        {
                            "key":  "D",
                            "label":  "SIEM"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Threat intelligence sharing' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  898,
        "question":  "True or False: \"STIX\" and \"TAXII\" are standards for threat intelligence.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  899,
        "question":  "What does \"MITRE ATT&CK\" framework provide?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Tactics, techniques, procedures of adversaries"
                        },
                        {
                            "key":  "B",
                            "label":  "Security controls"
                        },
                        {
                            "key":  "C",
                            "label":  "Risk assessment"
                        },
                        {
                            "key":  "D",
                            "label":  "Compliance checklist"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Tactics, techniques, procedures of adversaries' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  900,
        "question":  "Which of the following is a \"cyber kill chain\" phase?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, Actions"
                        },
                        {
                            "key":  "B",
                            "label":  "Plan, Do, Check, Act"
                        },
                        {
                            "key":  "C",
                            "label":  "Identify, Protect, Detect, Respond, Recover"
                        },
                        {
                            "key":  "D",
                            "label":  "Prepare, Identify, Contain, Eradicate"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, Actions' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  901,
        "question":  "True or False: \"Diamond model\" describes intrusion analysis.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  902,
        "question":  "What does \"IOA\" (Indicator of Attack) focus on?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Adversary intent and behavior"
                        },
                        {
                            "key":  "B",
                            "label":  "Compromise artifacts"
                        },
                        {
                            "key":  "C",
                            "label":  "Malware signatures"
                        },
                        {
                            "key":  "D",
                            "label":  "File hashes"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Adversary intent and behavior' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  903,
        "question":  "Which of the following is an \"IOC\" (Indicator of Compromise)?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Malicious IP, domain, hash"
                        },
                        {
                            "key":  "B",
                            "label":  "User behavior"
                        },
                        {
                            "key":  "C",
                            "label":  "Vulnerability"
                        },
                        {
                            "key":  "D",
                            "label":  "Configuration"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Malicious IP, domain, hash' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  904,
        "question":  "True or False: \"Threat hunting\" is proactive, not reactive.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  905,
        "question":  "What does \"ATP\" (Advanced Persistent Threat) refer to?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Long-term targeted attack"
                        },
                        {
                            "key":  "B",
                            "label":  "Virus"
                        },
                        {
                            "key":  "C",
                            "label":  "Worm"
                        },
                        {
                            "key":  "D",
                            "label":  "Trojan"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Long-term targeted attack' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  906,
        "question":  "Which of the following is a \"nation-state actor\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Government-sponsored"
                        },
                        {
                            "key":  "B",
                            "label":  "Hacktivist"
                        },
                        {
                            "key":  "C",
                            "label":  "Cybercriminal"
                        },
                        {
                            "key":  "D",
                            "label":  "Insider"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Government-sponsored' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  907,
        "question":  "True or False: \"Ransomware-as-a-service\" (RaaS) lowers barrier for attackers.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  908,
        "question":  "What does \"double extortion\" ransomware do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Steals data before encrypting, threatens to leak"
                        },
                        {
                            "key":  "B",
                            "label":  "Encrypts twice"
                        },
                        {
                            "key":  "C",
                            "label":  "Pays twice"
                        },
                        {
                            "key":  "D",
                            "label":  "Decrypts after payment"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Steals data before encrypting, threatens to leak' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  909,
        "question":  "Which of the following is a \"wiper\" malware?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Destroys data, not for ransom"
                        },
                        {
                            "key":  "B",
                            "label":  "Encrypts for ransom"
                        },
                        {
                            "key":  "C",
                            "label":  "Steals data"
                        },
                        {
                            "key":  "D",
                            "label":  "Monitors activity"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Destroys data, not for ransom' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  910,
        "question":  "True or False: \"Crypto mining\" malware uses victim's resources.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  911,
        "question":  "What does \"adware\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Displays unwanted ads"
                        },
                        {
                            "key":  "B",
                            "label":  "Steals passwords"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypts files"
                        },
                        {
                            "key":  "D",
                            "label":  "Deletes files"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Displays unwanted ads' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  912,
        "question":  "Which of the following is a \"spyware\" characteristic?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Collects user information without consent"
                        },
                        {
                            "key":  "B",
                            "label":  "Displays ads"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypts files"
                        },
                        {
                            "key":  "D",
                            "label":  "Blocks access"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Collects user information without consent' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  913,
        "question":  "True or False: \"Browser hijacker\" changes browser settings.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  914,
        "question":  "What does \"scareware\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Fake alerts to scare user into paying"
                        },
                        {
                            "key":  "B",
                            "label":  "Steals data"
                        },
                        {
                            "key":  "C",
                            "label":  "Encrypts files"
                        },
                        {
                            "key":  "D",
                            "label":  "Shows ads"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Fake alerts to scare user into paying' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  915,
        "question":  "Which of the following is a \"fleeceware\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Overpriced app with auto-renewal"
                        },
                        {
                            "key":  "B",
                            "label":  "Free app"
                        },
                        {
                            "key":  "C",
                            "label":  "Open source"
                        },
                        {
                            "key":  "D",
                            "label":  "Ad-supported"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Overpriced app with auto-renewal' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  916,
        "question":  "True or False: \"Tech support scam\" tricks user into paying for fake support.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  917,
        "question":  "What does \"social engineering\" exploit?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Human psychology"
                        },
                        {
                            "key":  "B",
                            "label":  "Software vulnerabilities"
                        },
                        {
                            "key":  "C",
                            "label":  "Network flaws"
                        },
                        {
                            "key":  "D",
                            "label":  "Hardware bugs"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Human psychology' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  918,
        "question":  "Which of the following is a \"pretexting\" example?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Fake IT support calling for password"
                        },
                        {
                            "key":  "B",
                            "label":  "Sending phishing email"
                        },
                        {
                            "key":  "C",
                            "label":  "Leaving USB drive"
                        },
                        {
                            "key":  "D",
                            "label":  "Tailgating"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Fake IT support calling for password' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  919,
        "question":  "True or False: \"Quid pro quo\" offers service for information.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  920,
        "question":  "What does \"baiting\" attack use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Promises of goods to lure victims"
                        },
                        {
                            "key":  "B",
                            "label":  "Fake alerts"
                        },
                        {
                            "key":  "C",
                            "label":  "Impersonation"
                        },
                        {
                            "key":  "D",
                            "label":  "Fear"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Promises of goods to lure victims' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  921,
        "question":  "Which of the following is a \"USB drop\" attack?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Leave infected USB drives in parking lot"
                        },
                        {
                            "key":  "B",
                            "label":  "Email attachment"
                        },
                        {
                            "key":  "C",
                            "label":  "Malicious link"
                        },
                        {
                            "key":  "D",
                            "label":  "Fake login page"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Leave infected USB drives in parking lot' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  922,
        "question":  "True or False: \"Pharming\" redirects to fake website without user interaction.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  923,
        "question":  "What does \"domain shadowing\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Create subdomains on compromised domain"
                        },
                        {
                            "key":  "B",
                            "label":  "Steal domain"
                        },
                        {
                            "key":  "C",
                            "label":  "Hijack DNS"
                        },
                        {
                            "key":  "D",
                            "label":  "Redirect traffic"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Create subdomains on compromised domain' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  924,
        "question":  "Which of the following is a \"typosquatting\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Register domains similar to legitimate"
                        },
                        {
                            "key":  "B",
                            "label":  "Steal credentials"
                        },
                        {
                            "key":  "C",
                            "label":  "Phishing email"
                        },
                        {
                            "key":  "D",
                            "label":  "Malware download"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Register domains similar to legitimate' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  925,
        "question":  "True or False: \"Cybersquatting\" registers domain of trademark.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  926,
        "question":  "What does \"DNS tunneling\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Exfiltrate data via DNS queries"
                        },
                        {
                            "key":  "B",
                            "label":  "Speed up DNS"
                        },
                        {
                            "key":  "C",
                            "label":  "Block DNS"
                        },
                        {
                            "key":  "D",
                            "label":  "Encrypt DNS"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Exfiltrate data via DNS queries' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  927,
        "question":  "Which of the following is a \"fast flux\" technique?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Rapidly change DNS records to evade detection"
                        },
                        {
                            "key":  "B",
                            "label":  "Fast internet"
                        },
                        {
                            "key":  "C",
                            "label":  "Quick response"
                        },
                        {
                            "key":  "D",
                            "label":  "High throughput"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Rapidly change DNS records to evade detection' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  928,
        "question":  "True or False: \"Domain generation algorithm\" (DGA) creates many domains for C2.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  929,
        "question":  "What does \"reflective DLL injection\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Load DLL from memory without disk"
                        },
                        {
                            "key":  "B",
                            "label":  "Reflect traffic"
                        },
                        {
                            "key":  "C",
                            "label":  "Inject into process"
                        },
                        {
                            "key":  "D",
                            "label":  "Load from disk"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Load DLL from memory without disk' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  930,
        "question":  "Which of the following is a \"process hollowing\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Replace executable memory with malicious code"
                        },
                        {
                            "key":  "B",
                            "label":  "Hollow out process"
                        },
                        {
                            "key":  "C",
                            "label":  "Delete process"
                        },
                        {
                            "key":  "D",
                            "label":  "Suspend process"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Replace executable memory with malicious code' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  931,
        "question":  "True or False: \"Process injection\" hides malware in legitimate process.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  932,
        "question":  "What does \"APC injection\" use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Asynchronous Procedure Call"
                        },
                        {
                            "key":  "B",
                            "label":  "Anti-virus"
                        },
                        {
                            "key":  "C",
                            "label":  "Process creation"
                        },
                        {
                            "key":  "D",
                            "label":  "Thread creation"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Asynchronous Procedure Call' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  933,
        "question":  "Which of the following is a \"DLL side-loading\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Load legitimate DLL that loads malicious one"
                        },
                        {
                            "key":  "B",
                            "label":  "Load malicious DLL directly"
                        },
                        {
                            "key":  "C",
                            "label":  "Load from network"
                        },
                        {
                            "key":  "D",
                            "label":  "Load from memory"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Load legitimate DLL that loads malicious one' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  934,
        "question":  "True or False: \"DLL proxying\" forwards calls to original DLL.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  935,
        "question":  "What does \"COM object hijacking\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Replace COM class registration"
                        },
                        {
                            "key":  "B",
                            "label":  "Hijack COM port"
                        },
                        {
                            "key":  "C",
                            "label":  "Steal COM object"
                        },
                        {
                            "key":  "D",
                            "label":  "Delete COM"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Replace COM class registration' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  936,
        "question":  "Which of the following is a \"registry persistence\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Run key in registry"
                        },
                        {
                            "key":  "B",
                            "label":  "Scheduled task"
                        },
                        {
                            "key":  "C",
                            "label":  "Service"
                        },
                        {
                            "key":  "D",
                            "label":  "Startup folder"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Run key in registry' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  937,
        "question":  "True or False: \"Scheduled task\" can maintain persistence.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  938,
        "question":  "What does \"WMI persistence\" use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Windows Management Instrumentation event subscription"
                        },
                        {
                            "key":  "B",
                            "label":  "Registry"
                        },
                        {
                            "key":  "C",
                            "label":  "Scheduled task"
                        },
                        {
                            "key":  "D",
                            "label":  "Service"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Windows Management Instrumentation event subscription' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  939,
        "question":  "Which of the following is a \"bootkit\" persistence?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Infect MBR or UEFI"
                        },
                        {
                            "key":  "B",
                            "label":  "Registry"
                        },
                        {
                            "key":  "C",
                            "label":  "Startup folder"
                        },
                        {
                            "key":  "D",
                            "label":  "Scheduled task"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Infect MBR or UEFI' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  940,
        "question":  "True or False: \"Firmware persistence\" survives OS reinstall.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  941,
        "question":  "What does \"living off the land\" (LotL) use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Built-in OS tools"
                        },
                        {
                            "key":  "B",
                            "label":  "Custom malware"
                        },
                        {
                            "key":  "C",
                            "label":  "Third-party tools"
                        },
                        {
                            "key":  "D",
                            "label":  "Cloud services"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Built-in OS tools' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  942,
        "question":  "Which of the following is a \"PowerShell\" abuse?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Download and execute payload"
                        },
                        {
                            "key":  "B",
                            "label":  "Log management"
                        },
                        {
                            "key":  "C",
                            "label":  "System administration"
                        },
                        {
                            "key":  "D",
                            "label":  "File copy"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Download and execute payload' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  943,
        "question":  "True or False: \"WMI\" can be used for lateral movement.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  944,
        "question":  "What does \"PsExec\" (Sysinternals) allow?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Remote command execution"
                        },
                        {
                            "key":  "B",
                            "label":  "File transfer"
                        },
                        {
                            "key":  "C",
                            "label":  "Registry editing"
                        },
                        {
                            "key":  "D",
                            "label":  "Process monitoring"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Remote command execution' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  945,
        "question":  "Which of the following is a \"pass-the-hash\" attack?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Use NTLM hash to authenticate"
                        },
                        {
                            "key":  "B",
                            "label":  "Steal password"
                        },
                        {
                            "key":  "C",
                            "label":  "Brute force hash"
                        },
                        {
                            "key":  "D",
                            "label":  "Crack hash"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Use NTLM hash to authenticate' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  946,
        "question":  "True or False: \"Pass-the-ticket\" uses Kerberos tickets.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  947,
        "question":  "What does \"overpass-the-hash\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Get TGT using hash"
                        },
                        {
                            "key":  "B",
                            "label":  "Pass hash directly"
                        },
                        {
                            "key":  "C",
                            "label":  "Crack hash"
                        },
                        {
                            "key":  "D",
                            "label":  "Use plaintext"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Get TGT using hash' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  948,
        "question":  "Which of the following is a \"golden ticket\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Forge Kerberos TGT with KRBTGT hash"
                        },
                        {
                            "key":  "B",
                            "label":  "Normal ticket"
                        },
                        {
                            "key":  "C",
                            "label":  "Silver ticket"
                        },
                        {
                            "key":  "D",
                            "label":  "Service ticket"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Forge Kerberos TGT with KRBTGT hash' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  949,
        "question":  "True or False: \"Silver ticket\" forges service ticket.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  950,
        "question":  "What does \"DCShadow\" attack do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Register rogue domain controller"
                        },
                        {
                            "key":  "B",
                            "label":  "Shadow DC"
                        },
                        {
                            "key":  "C",
                            "label":  "Backup DC"
                        },
                        {
                            "key":  "D",
                            "label":  "Attack DC"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Register rogue domain controller' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  951,
        "question":  "Which of the following is a \"DCSync\" attack?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Request replication to steal hashes"
                        },
                        {
                            "key":  "B",
                            "label":  "Sync domain"
                        },
                        {
                            "key":  "C",
                            "label":  "Sync time"
                        },
                        {
                            "key":  "D",
                            "label":  "Sync files"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Request replication to steal hashes' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  952,
        "question":  "True or False: \"Skeleton key\" malware injects into LSASS to allow any password.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  953,
        "question":  "What does \"Mimikatz\" tool do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Extract credentials from memory"
                        },
                        {
                            "key":  "B",
                            "label":  "Scan network"
                        },
                        {
                            "key":  "C",
                            "label":  "Crack passwords"
                        },
                        {
                            "key":  "D",
                            "label":  "Enumerate users"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Extract credentials from memory' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  954,
        "question":  "Which of the following is a \"procdump\" usage?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Dump process memory for offline analysis"
                        },
                        {
                            "key":  "B",
                            "label":  "Kill process"
                        },
                        {
                            "key":  "C",
                            "label":  "Suspend process"
                        },
                        {
                            "key":  "D",
                            "label":  "List process"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Dump process memory for offline analysis' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  955,
        "question":  "True or False: \"Responder\" tool poisons LLMNR/NBT-NS.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  956,
        "question":  "What does \"ntlmrelayx\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Relay NTLM authentication to other services"
                        },
                        {
                            "key":  "B",
                            "label":  "Crack NTLM"
                        },
                        {
                            "key":  "C",
                            "label":  "Capture NTLM"
                        },
                        {
                            "key":  "D",
                            "label":  "Generate NTLM"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Relay NTLM authentication to other services' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  957,
        "question":  "Which of the following is a \"Kerberoasting\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Request service tickets and crack offline"
                        },
                        {
                            "key":  "B",
                            "label":  "Steal TGT"
                        },
                        {
                            "key":  "C",
                            "label":  "Attack KDC"
                        },
                        {
                            "key":  "D",
                            "label":  "Poison DNS"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Request service tickets and crack offline' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  958,
        "question":  "True or False: \"AS-REP roasting\" targets users without pre-authentication.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  959,
        "question":  "What does \"bloodhound\" tool map?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Active Directory attack paths"
                        },
                        {
                            "key":  "B",
                            "label":  "Network topology"
                        },
                        {
                            "key":  "C",
                            "label":  "File shares"
                        },
                        {
                            "key":  "D",
                            "label":  "User activity"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Active Directory attack paths' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  960,
        "question":  "Which of the following is a \"SharpHound\" collector?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Data collector for Bloodhound"
                        },
                        {
                            "key":  "B",
                            "label":  "Hound tool"
                        },
                        {
                            "key":  "C",
                            "label":  "Sharp tool"
                        },
                        {
                            "key":  "D",
                            "label":  "Collector only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Data collector for Bloodhound' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  961,
        "question":  "True or False: \"Cobalt Strike\" is commercial C2 framework.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  962,
        "question":  "What does \"Empire\" (PowerShell Empire) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Post-exploitation C2"
                        },
                        {
                            "key":  "B",
                            "label":  "Scanning"
                        },
                        {
                            "key":  "C",
                            "label":  "Forensics"
                        },
                        {
                            "key":  "D",
                            "label":  "Backup"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Post-exploitation C2' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  963,
        "question":  "Which of the following is a \"Metasploit\" component?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Exploit modules, payloads, encoders"
                        },
                        {
                            "key":  "B",
                            "label":  "Only scanning"
                        },
                        {
                            "key":  "C",
                            "label":  "Only exploitation"
                        },
                        {
                            "key":  "D",
                            "label":  "Only post-exploitation"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Exploit modules, payloads, encoders' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  964,
        "question":  "True or False: \"Nmap\" is for network discovery.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  965,
        "question":  "What does \"Wireshark\" capture?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Network packets"
                        },
                        {
                            "key":  "B",
                            "label":  "Processes"
                        },
                        {
                            "key":  "C",
                            "label":  "Files"
                        },
                        {
                            "key":  "D",
                            "label":  "Registry"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Network packets' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  966,
        "question":  "Which of the following is a \"Burp Suite\" use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Web application testing"
                        },
                        {
                            "key":  "B",
                            "label":  "Network scanning"
                        },
                        {
                            "key":  "C",
                            "label":  "Password cracking"
                        },
                        {
                            "key":  "D",
                            "label":  "Forensics"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Web application testing' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  967,
        "question":  "True or False: \"OWASP ZAP\" is open source web app scanner.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  968,
        "question":  "What does \"Sqlmap\" automate?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "SQL injection detection and exploitation"
                        },
                        {
                            "key":  "B",
                            "label":  "XSS"
                        },
                        {
                            "key":  "C",
                            "label":  "CSRF"
                        },
                        {
                            "key":  "D",
                            "label":  "SSRF"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'SQL injection detection and exploitation' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  969,
        "question":  "Which of the following is a \"Hydra\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Password brute-forcing"
                        },
                        {
                            "key":  "B",
                            "label":  "Network scan"
                        },
                        {
                            "key":  "C",
                            "label":  "Packet capture"
                        },
                        {
                            "key":  "D",
                            "label":  "Web proxy"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Password brute-forcing' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  970,
        "question":  "True or False: \"John the Ripper\" cracks passwords.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  971,
        "question":  "What does \"Hashcat\" support?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "GPU acceleration"
                        },
                        {
                            "key":  "B",
                            "label":  "Only CPU"
                        },
                        {
                            "key":  "C",
                            "label":  "Only single hash"
                        },
                        {
                            "key":  "D",
                            "label":  "No rules"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'GPU acceleration' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  972,
        "question":  "Which of the following is a \"Airgeddon\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Wi-Fi security auditing"
                        },
                        {
                            "key":  "B",
                            "label":  "Web scanning"
                        },
                        {
                            "key":  "C",
                            "label":  "Password cracking"
                        },
                        {
                            "key":  "D",
                            "label":  "Network mapping"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Wi-Fi security auditing' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  973,
        "question":  "True or False: \"Aircrack-ng\" suite cracks Wi-Fi encryption.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  974,
        "question":  "What does \"Bettercap\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Network MITM and monitoring"
                        },
                        {
                            "key":  "B",
                            "label":  "Web scanning"
                        },
                        {
                            "key":  "C",
                            "label":  "Password cracking"
                        },
                        {
                            "key":  "D",
                            "label":  "Forensics"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Network MITM and monitoring' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  975,
        "question":  "Which of the following is a \"Ettercap\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Network sniffer and MITM"
                        },
                        {
                            "key":  "B",
                            "label":  "Packet generator"
                        },
                        {
                            "key":  "C",
                            "label":  "Port scanner"
                        },
                        {
                            "key":  "D",
                            "label":  "Vulnerability scanner"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Network sniffer and MITM' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  976,
        "question":  "True or False: \"tcpdump\" captures packets from command line.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  977,
        "question":  "What does \"netcat\" (nc) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Read/write data across network"
                        },
                        {
                            "key":  "B",
                            "label":  "Capture packets"
                        },
                        {
                            "key":  "C",
                            "label":  "Scan ports"
                        },
                        {
                            "key":  "D",
                            "label":  "Crack passwords"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Read/write data across network' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  978,
        "question":  "Which of the following is a \"socat\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "More advanced netcat"
                        },
                        {
                            "key":  "B",
                            "label":  "Simple netcat"
                        },
                        {
                            "key":  "C",
                            "label":  "Proxy only"
                        },
                        {
                            "key":  "D",
                            "label":  "Tunnel only"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'More advanced netcat' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  979,
        "question":  "True or False: \"proxychains\" forces any tool through proxy.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  980,
        "question":  "What does \"tor\" provide?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Anonymity"
                        },
                        {
                            "key":  "B",
                            "label":  "VPN"
                        },
                        {
                            "key":  "C",
                            "label":  "Proxy"
                        },
                        {
                            "key":  "D",
                            "label":  "Firewall"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Anonymity' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  981,
        "question":  "Which of the following is a \"nslookup\" tool for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "DNS query"
                        },
                        {
                            "key":  "B",
                            "label":  "IP scan"
                        },
                        {
                            "key":  "C",
                            "label":  "Port scan"
                        },
                        {
                            "key":  "D",
                            "label":  "Traceroute"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'DNS query' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  982,
        "question":  "True or False: \"dig\" is DNS lookup tool.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  983,
        "question":  "What does \"traceroute\" show?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Network path and hops"
                        },
                        {
                            "key":  "B",
                            "label":  "DNS records"
                        },
                        {
                            "key":  "C",
                            "label":  "Port status"
                        },
                        {
                            "key":  "D",
                            "label":  "Service version"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Network path and hops' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  984,
        "question":  "Which of the following is a \"ping\" utility for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "ICMP echo to test connectivity"
                        },
                        {
                            "key":  "B",
                            "label":  "Port scan"
                        },
                        {
                            "key":  "C",
                            "label":  "Traceroute"
                        },
                        {
                            "key":  "D",
                            "label":  "DNS lookup"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'ICMP echo to test connectivity' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  985,
        "question":  "True or False: \"telnet\" can test TCP ports.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  986,
        "question":  "What does \"nc -zv\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Test TCP port connectivity without data"
                        },
                        {
                            "key":  "B",
                            "label":  "Verbose output"
                        },
                        {
                            "key":  "C",
                            "label":  "Zero data"
                        },
                        {
                            "key":  "D",
                            "label":  "All of the above"
                        }
                    ],
        "correct":  "D",
        "points":  1,
        "explanation":  "'All of the above' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  987,
        "question":  "Which of the following is a \"curl\" use?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Transfer data with URLs"
                        },
                        {
                            "key":  "B",
                            "label":  "Capture packets"
                        },
                        {
                            "key":  "C",
                            "label":  "Scan network"
                        },
                        {
                            "key":  "D",
                            "label":  "Crack password"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Transfer data with URLs' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  988,
        "question":  "True or False: \"wget\" can download files.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  989,
        "question":  "What does \"ssh\" provide?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Secure remote shell"
                        },
                        {
                            "key":  "B",
                            "label":  "File transfer only"
                        },
                        {
                            "key":  "C",
                            "label":  "Port scan"
                        },
                        {
                            "key":  "D",
                            "label":  "DNS query"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Secure remote shell' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  990,
        "question":  "Which of the following is a \"scp\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Secure copy over SSH"
                        },
                        {
                            "key":  "B",
                            "label":  "Secure shell"
                        },
                        {
                            "key":  "C",
                            "label":  "Secure FTP"
                        },
                        {
                            "key":  "D",
                            "label":  "Secure socket"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Secure copy over SSH' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  991,
        "question":  "True or False: \"rsync\" efficiently syncs files.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  992,
        "question":  "What does \"grep\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Search text patterns"
                        },
                        {
                            "key":  "B",
                            "label":  "List files"
                        },
                        {
                            "key":  "C",
                            "label":  "Copy files"
                        },
                        {
                            "key":  "D",
                            "label":  "Delete files"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Search text patterns' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  993,
        "question":  "Which of the following is a \"awk\" for?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Text processing"
                        },
                        {
                            "key":  "B",
                            "label":  "Search"
                        },
                        {
                            "key":  "C",
                            "label":  "Replace"
                        },
                        {
                            "key":  "D",
                            "label":  "Format"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Text processing' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  994,
        "question":  "True or False: \"sed\" stream editor.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  995,
        "question":  "What does \"jq\" process?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "JSON data"
                        },
                        {
                            "key":  "B",
                            "label":  "XML data"
                        },
                        {
                            "key":  "C",
                            "label":  "CSV data"
                        },
                        {
                            "key":  "D",
                            "label":  "YAML data"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'JSON data' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  996,
        "question":  "Which of the following is a \"yq\" tool?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "YAML processor"
                        },
                        {
                            "key":  "B",
                            "label":  "JSON processor"
                        },
                        {
                            "key":  "C",
                            "label":  "XML processor"
                        },
                        {
                            "key":  "D",
                            "label":  "CSV processor"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'YAML processor' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  997,
        "question":  "True or False: \"cron\" schedules tasks.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  998,
        "question":  "What does \"systemd timer\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Schedule tasks (alternative to cron)"
                        },
                        {
                            "key":  "B",
                            "label":  "Log management"
                        },
                        {
                            "key":  "C",
                            "label":  "Service manager"
                        },
                        {
                            "key":  "D",
                            "label":  "Process monitor"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Schedule tasks (alternative to cron)' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  999,
        "question":  "Which of the following is a \"journalctl\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "View systemd logs"
                        },
                        {
                            "key":  "B",
                            "label":  "View kernel logs"
                        },
                        {
                            "key":  "C",
                            "label":  "View cron logs"
                        },
                        {
                            "key":  "D",
                            "label":  "View auth logs"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'View systemd logs' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  1000,
        "question":  "True or False: \"syslog\" is standard logging protocol.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  1001,
        "question":  "What does \"logrotate\" manage?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Log file rotation and compression"
                        },
                        {
                            "key":  "B",
                            "label":  "Log analysis"
                        },
                        {
                            "key":  "C",
                            "label":  "Log search"
                        },
                        {
                            "key":  "D",
                            "label":  "Log encryption"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Log file rotation and compression' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  1002,
        "question":  "Which of the following is a \"fail2ban\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Brute force protection by banning IPs"
                        },
                        {
                            "key":  "B",
                            "label":  "Intrusion detection"
                        },
                        {
                            "key":  "C",
                            "label":  "Log monitoring"
                        },
                        {
                            "key":  "D",
                            "label":  "Firewall"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Brute force protection by banning IPs' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  1003,
        "question":  "True or False: \"auditd\" (Linux) logs system calls.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  1004,
        "question":  "What does \"osquery\" do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Query system state as SQL"
                        },
                        {
                            "key":  "B",
                            "label":  "Log analysis"
                        },
                        {
                            "key":  "C",
                            "label":  "Intrusion detection"
                        },
                        {
                            "key":  "D",
                            "label":  "Firewall"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Query system state as SQL' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  1005,
        "question":  "Which of the following is a \"Velociraptor\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Endpoint monitoring and forensics"
                        },
                        {
                            "key":  "B",
                            "label":  "Log aggregation"
                        },
                        {
                            "key":  "C",
                            "label":  "SIEM"
                        },
                        {
                            "key":  "D",
                            "label":  "Firewall"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Endpoint monitoring and forensics' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  1006,
        "question":  "True or False: \"TheHive\" is incident response platform.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  1007,
        "question":  "What does \"Cortex\" (TheHive) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Analyze observables"
                        },
                        {
                            "key":  "B",
                            "label":  "Incident tracking"
                        },
                        {
                            "key":  "C",
                            "label":  "Case management"
                        },
                        {
                            "key":  "D",
                            "label":  "Reporting"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Analyze observables' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  1008,
        "question":  "Which of the following is a \"MISP\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Threat intelligence platform"
                        },
                        {
                            "key":  "B",
                            "label":  "SIEM"
                        },
                        {
                            "key":  "C",
                            "label":  "SOAR"
                        },
                        {
                            "key":  "D",
                            "label":  "EDR"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Threat intelligence platform' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    },
    {
        "id":  1009,
        "question":  "True or False: \"OpenCTI\" is threat intelligence platform.",
        "options":  [
                        {
                            "key":  "True",
                            "label":  "True"
                        },
                        {
                            "key":  "False",
                            "label":  "False"
                        }
                    ],
        "correct":  "True",
        "points":  1,
        "explanation":  "True. This statement accurately describes established TPM/product practice - recognizing it correctly guides day-to-day decisions about discovery, delivery, or measurement."
    },
    {
        "id":  1010,
        "question":  "What does \"GRR\" (Google Rapid Response) do?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Remote live forensics"
                        },
                        {
                            "key":  "B",
                            "label":  "Log collection"
                        },
                        {
                            "key":  "C",
                            "label":  "SIEM"
                        },
                        {
                            "key":  "D",
                            "label":  "EDR"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Remote live forensics' is correct. This reflects the underlying TPM principle the question targets, and applying it correctly drives better discovery, delivery, or measurement decisions."
    },
    {
        "id":  1011,
        "question":  "Which of the following is a \"REMnux\"?",
        "options":  [
                        {
                            "key":  "A",
                            "label":  "Linux toolkit for reverse engineering malware"
                        },
                        {
                            "key":  "B",
                            "label":  "Forensics"
                        },
                        {
                            "key":  "C",
                            "label":  "Incident response"
                        },
                        {
                            "key":  "D",
                            "label":  "Threat hunting"
                        }
                    ],
        "correct":  "A",
        "points":  1,
        "explanation":  "'Linux toolkit for reverse engineering malware' is the correct example - it matches the defining property the question targets, while the other options either mismatch or describe unrelated concepts."
    }
];