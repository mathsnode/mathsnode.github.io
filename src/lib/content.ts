export type CourseSlug = 'foundations' | 'national-4' | 'national-5' | 'higher';

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  course: CourseSlug;
  area: string;
  summary: string;
  content: string;
  prerequisites: string[];
  practiceIds: string[];
  curriculumItemIds: string[];
}

export interface PracticeSet {
  id: string;
  title: string;
  course: CourseSlug;
  summary: string;
  questions: string[];
}

export interface CourseMeta {
  slug: CourseSlug;
  title: string;
  subtitle: string;
  description: string;
  lessons: Lesson[];
  practiceSets: PracticeSet[];
}

export const courseCatalog: CourseMeta[] = [
  {
    slug: 'foundations',
    title: 'MathsNode Foundations',
    subtitle: 'Build understanding from the ground up',
    description: 'A conceptual foundation for mathematics before National 4, National 5 and Higher.',
    lessons: [
      {
        id: 'foundations-1',
        slug: 'mathematical-language-and-logic',
        title: 'Mathematical language and logic',
        course: 'foundations',
        area: 'Foundations',
        summary: 'Learn how mathematical statements, definitions and logical structure support everything that follows.',
        content: '## Why this matters\nMathematics is not just calculation. It is a language with precise rules.\n\n### Prerequisites\n- None\n\n### The idea\nA mathematical statement must be precise. Definitions tell us what a word means. A theorem tells us what follows.\n\n### Build the idea\n- A definition is a precise agreement.\n- A statement can be true, false or undecided until we prove it.\n- Equality means the two expressions name the same quantity or relationship.\n\n### Worked example\nIf we define a prime number as a whole number greater than 1 with exactly two positive factors, then 7 is prime because its factors are 1 and 7.\n\n### Common mistake\nDo not confuse a statement with an example. A single example does not prove a general claim.\n\n### Guided practice\n- Give a definition for an even number.\n- Decide whether the claim “all prime numbers are odd” is true.\n\n### Summary\nPrecision matters. Mathematics begins with clear language.',
        prerequisites: [],
        practiceIds: ['practice-foundations-1'],
        curriculumItemIds: ['foundation-language']
      },
      {
        id: 'foundations-2',
        slug: 'natural-numbers-and-successor',
        title: 'Natural numbers and successor',
        course: 'foundations',
        area: 'Number',
        summary: 'Build counting from zero, succession and order.',
        content: '## Why this matters\nThe natural numbers give us a foundation for counting and order.\n\n### The idea\nEach natural number has a successor. The counting process starts from zero and proceeds one step at a time.\n\n### Summary\nSuccessor structure gives the natural numbers their basic order.',
        prerequisites: ['foundations-1'],
        practiceIds: ['practice-foundations-2'],
        curriculumItemIds: ['foundation-natural-numbers']
      },
      {
        id: 'foundations-3',
        slug: 'addition-and-multiplication-from-first-principles',
        title: 'Addition and multiplication from first principles',
        course: 'foundations',
        area: 'Operations',
        summary: 'Define addition and multiplication recursively and connect them to arithmetic properties.',
        content: '## Why this matters\nArithmetic operations are not arbitrary rules; they can be built from simple repeated steps.\n\n### The idea\nAddition combines quantities, while multiplication repeats equal groups.\n\n### Summary\nBuilding operations from first principles makes them easier to reason about.',
        prerequisites: ['foundations-2'],
        practiceIds: ['practice-foundations-3'],
        curriculumItemIds: ['foundation-operations']
      },
      {
        id: 'foundations-4',
        slug: 'fractions-decimals-and-percentages',
        title: 'Fractions, decimals and percentages',
        course: 'foundations',
        area: 'Number',
        summary: 'Treat fractions, decimals and percentages as linked representations of quantity.',
        content: '## Why this matters\nDifferent representations can describe the same amount.\n\n### The idea\nA fraction, a decimal and a percentage may all describe the same part of a whole.\n\n### Summary\nThe same quantity can be expressed in several equivalent ways.',
        prerequisites: ['foundations-3'],
        practiceIds: ['practice-foundations-4'],
        curriculumItemIds: ['foundation-fractions']
      },
      {
        id: 'foundations-5',
        slug: 'variables-expressions-and-equations',
        title: 'Variables, expressions and equations',
        course: 'foundations',
        area: 'Algebra',
        summary: 'Move from arithmetic to general relationships using variables and equations.',
        content: '## Why this matters\nAlgebra lets us describe general patterns instead of only particular cases.\n\n### The idea\nA variable stands for a quantity that can change or be unknown.\n\n### Summary\nExpressions and equations are the bridge from arithmetic to algebra.',
        prerequisites: ['foundations-4'],
        practiceIds: ['practice-foundations-5'],
        curriculumItemIds: ['foundation-algebra']
      },
      {
        id: 'foundations-6',
        slug: 'coordinates-graphs-and-functions',
        title: 'Coordinates, graphs and functions',
        course: 'foundations',
        area: 'Functions',
        summary: 'Interpret relationships through coordinates, graphs and functions.',
        content: '## Why this matters\nGraphs turn algebraic relationships into visual patterns.\n\n### The idea\nA point on a graph has coordinates, and a function links input to output.\n\n### Summary\nGraphs give us a picture of how variables change together.',
        prerequisites: ['foundations-5'],
        practiceIds: ['practice-foundations-6'],
        curriculumItemIds: ['foundation-functions']
      }
    ],
    practiceSets: [
      {
        id: 'practice-foundations-1',
        title: 'Foundations warm-up',
        course: 'foundations',
        summary: 'A compact set of questions that checks the core ideas of definitions, statements and equality.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-foundations-2',
        title: 'Natural numbers and successor',
        course: 'foundations',
        summary: 'Practise counting, ordering and the idea of successor.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-foundations-3',
        title: 'Addition and multiplication practice',
        course: 'foundations',
        summary: 'Use repeated addition and equal groups to build fluency.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-foundations-4',
        title: 'Fractions, decimals and percentages',
        course: 'foundations',
        summary: 'Convert between common representations of quantity.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-foundations-5',
        title: 'Variables and equations',
        course: 'foundations',
        summary: 'Translate words into algebraic expressions and solve simple equations.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-foundations-6',
        title: 'Graphs and functions',
        course: 'foundations',
        summary: 'Plot points, read graphs and connect them to functions.',
        questions: ['Q1', 'Q2']
      }
    ]
  },
  {
    slug: 'national-4',
    title: 'National 4 Mathematics',
    subtitle: 'Straightforward mathematical skills with real-world relevance',
    description: 'A complete pathway covering expressions, relationships, numeracy and practical problem solving.',
    lessons: [
      {
        id: 'n4-1',
        slug: 'numerical-skills',
        title: 'Numerical skills and calculations',
        course: 'national-4',
        area: 'Numeracy',
        summary: 'Strengthen arithmetic, decimals, percentages and estimation.',
        content: '## Why this matters\nNumeracy is the everyday language of measurement, money and data.\n\n### Prerequisites\n- Foundations language\n\n### The idea\nA strong numerical foundation makes algebra and problem solving easier.\n\n### Worked example\n$15\%$ of 240 is $36$.\n\n### Summary\nNumeracy is practical, flexible and essential.',
        prerequisites: ['foundations-1'],
        practiceIds: ['practice-n4-1'],
        curriculumItemIds: ['n4-numeracy']
      },
      {
        id: 'n4-2',
        slug: 'expressions-and-formulae',
        title: 'Expressions and formulae',
        course: 'national-4',
        area: 'Algebra',
        summary: 'Simplify expressions and evaluate formulae in practical contexts.',
        content: '## Why this matters\nFormulae allow us to work efficiently with variables in real contexts.\n\n### The idea\nAn expression combines numbers and symbols; a formula tells us how to calculate a quantity.\n\n### Summary\nClear algebraic notation makes formulae easier to use and check.',
        prerequisites: ['foundations-5', 'n4-1'],
        practiceIds: ['practice-n4-2'],
        curriculumItemIds: ['n4-expressions']
      },
      {
        id: 'n4-3',
        slug: 'linear-relationships',
        title: 'Linear relationships',
        course: 'national-4',
        area: 'Relationships',
        summary: 'Use tables, graphs and equations to interpret straight-line relationships.',
        content: '## Why this matters\nLinear relationships help us describe change in a simple, predictable way.\n\n### The idea\nA straight-line graph has a constant gradient, and that produces predictable change.\n\n### Summary\nLinearity is one of the most useful patterns in mathematics.',
        prerequisites: ['foundations-6', 'n4-2'],
        practiceIds: ['practice-n4-3'],
        curriculumItemIds: ['n4-relationships']
      },
      {
        id: 'n4-4',
        slug: 'geometry-and-measures',
        title: 'Geometry and measures',
        course: 'national-4',
        area: 'Geometry',
        summary: 'Reason about perimeter, area, volume and angle in practical settings.',
        content: '## Why this matters\nGeometry helps us describe the shapes and spaces around us.\n\n### The idea\nMeasurement is precise and requires clear units and methods.\n\n### Summary\nGeometry connects shape, space and calculation.',
        prerequisites: ['foundations-1', 'n4-1'],
        practiceIds: ['practice-n4-4'],
        curriculumItemIds: ['n4-geometry']
      },
      {
        id: 'n4-5',
        slug: 'statistics-and-data-handling',
        title: 'Statistics and data handling',
        course: 'national-4',
        area: 'Statistics',
        summary: 'Collect, present and interpret data with suitable methods and reasoning.',
        content: '## Why this matters\nData helps us make reasoned decisions and communicate findings.\n\n### The idea\nA statistical summary needs both calculation and interpretation.\n\n### Summary\nGood statistics require careful selection of methods and clear communication.',
        prerequisites: ['n4-1', 'n4-4'],
        practiceIds: ['practice-n4-5'],
        curriculumItemIds: ['n4-statistics']
      }
    ],
    practiceSets: [
      {
        id: 'practice-n4-1',
        title: 'National 4 numeracy practice',
        course: 'national-4',
        summary: 'Practice simple arithmetic, percentages and decimal work.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-n4-2',
        title: 'Expressions and formulae',
        course: 'national-4',
        summary: 'Simplify algebraic expressions and evaluate formulae.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-n4-3',
        title: 'Straight-line graphs',
        course: 'national-4',
        summary: 'Plot and interpret linear relationships.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-n4-4',
        title: 'Geometry and measures',
        course: 'national-4',
        summary: 'Solve problems involving perimeter, area and angle.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-n4-5',
        title: 'Statistics and data handling',
        course: 'national-4',
        summary: 'Analyse data and interpret results.',
        questions: ['Q1', 'Q2']
      }
    ]
  },
  {
    slug: 'national-5',
    title: 'National 5 Mathematics',
    subtitle: 'Algebra, geometry and methods beyond the basics',
    description: 'A broad course covering algebraic manipulation, geometry, trigonometry, statistics and applications.',
    lessons: [
      {
        id: 'n5-1',
        slug: 'algebraic-manipulation',
        title: 'Algebraic manipulation',
        course: 'national-5',
        area: 'Algebra',
        summary: 'Learn to simplify expressions, expand brackets and factorise accurately.',
        content: '## Why this matters\nAlgebra gives us a language for general relationships.\n\n### Prerequisites\n- Foundations language\n\n### The idea\nA variable stands for a quantity that can change.\n\n### Worked example\n$3(x+2)=3x+6$\n\n### Summary\nCareful manipulation keeps algebra reliable.',
        prerequisites: ['foundations-1'],
        practiceIds: ['practice-n5-1'],
        curriculumItemIds: ['n5-algebra']
      },
      {
        id: 'n5-2',
        slug: 'equations-and-inequalities',
        title: 'Equations and inequalities',
        course: 'national-5',
        area: 'Equations',
        summary: 'Solve linear equations and reason clearly about inequalities.',
        content: '## Why this matters\nEquations and inequalities let us describe constraints and unknown values.\n\n### The idea\nAn equation states equality; an inequality states a range of possible values.\n\n### Summary\nThe solution set tells us which values satisfy the condition.',
        prerequisites: ['n5-1'],
        practiceIds: ['practice-n5-2'],
        curriculumItemIds: ['n5-equations']
      },
      {
        id: 'n5-3',
        slug: 'straight-line-graphs',
        title: 'Straight-line graphs',
        course: 'national-5',
        area: 'Graphs',
        summary: 'Use gradient, intercept and equations of lines in familiar contexts.',
        content: '## Why this matters\nStraight-line graphs describe many real relationships in a simple way.\n\n### The idea\nThe gradient and intercept define the line completely.\n\n### Summary\nA line can be described algebraically and graphically.',
        prerequisites: ['n4-3'],
        practiceIds: ['practice-n5-3'],
        curriculumItemIds: ['n5-straight-line']
      },
      {
        id: 'n5-4',
        slug: 'quadratics-and-factorising',
        title: 'Quadratics and factorising',
        course: 'national-5',
        area: 'Algebra',
        summary: 'Factorise quadratics and solve equations graphically and algebraically.',
        content: '## Why this matters\nQuadratic relationships appear in many practical and scientific situations.\n\n### The idea\nFactorising highlights the roots of a quadratic.\n\n### Summary\nQuadratics are rich patterns that connect algebra to graphs.',
        prerequisites: ['n5-2'],
        practiceIds: ['practice-n5-4'],
        curriculumItemIds: ['n5-quadratics']
      },
      {
        id: 'n5-5',
        slug: 'trigonometry-and-geometry',
        title: 'Trigonometry and geometry',
        course: 'national-5',
        area: 'Trigonometry',
        summary: 'Use trigonometric ratios and angle reasoning to solve geometric problems.',
        content: '## Why this matters\nTrigonometry links angles and sides in triangles.\n\n### The idea\nThe sine, cosine and tangent ratios allow us to solve many angle problems.\n\n### Summary\nTrigonometry is a powerful tool for shape and measure.',
        prerequisites: ['n4-4'],
        practiceIds: ['practice-n5-5'],
        curriculumItemIds: ['n5-trigonometry']
      },
      {
        id: 'n5-6',
        slug: 'statistics-and-probability',
        title: 'Statistics and probability',
        course: 'national-5',
        area: 'Statistics',
        summary: 'Interpret data and solve elementary probability problems with clear reasoning.',
        content: '## Why this matters\nProbability helps us reason about chance in a fair and structured way.\n\n### The idea\nA probability is a measure of how likely an event is.\n\n### Summary\nProbability combines logic, counting and interpretation.',
        prerequisites: ['n4-5'],
        practiceIds: ['practice-n5-6'],
        curriculumItemIds: ['n5-statistics']
      }
    ],
    practiceSets: [
      {
        id: 'practice-n5-1',
        title: 'National 5 algebra practice',
        course: 'national-5',
        summary: 'Practice expansion, factorising and solving equations.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-n5-2',
        title: 'Equations and inequalities',
        course: 'national-5',
        summary: 'Solve linear equations, rearrange and reason through inequalities.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-n5-3',
        title: 'Straight-line graphs',
        course: 'national-5',
        summary: 'Find gradients, intercepts and equations of lines.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-n5-4',
        title: 'Quadratics',
        course: 'national-5',
        summary: 'Factorise and solve quadratic equations.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-n5-5',
        title: 'Trigonometry',
        course: 'national-5',
        summary: 'Use triangle ratios to solve unknown sides and angles.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-n5-6',
        title: 'Statistics and probability',
        course: 'national-5',
        summary: 'Work with averages, spread and basic probability.',
        questions: ['Q1', 'Q2']
      }
    ]
  },
  {
    slug: 'higher',
    title: 'Higher Mathematics',
    subtitle: 'Rigorous thinking, powerful methods and strong problem solving',
    description: 'A complete Higher course with algebra, trigonometry, calculus and applications.',
    lessons: [
      {
        id: 'higher-1',
        slug: 'differentiation-from-first-principles',
        title: 'Differentiation from first principles',
        course: 'higher',
        area: 'Calculus',
        summary: 'Build the idea of derivative from the gradient of a curve and the difference quotient.',
        content: '## Why this matters\nThe derivative is a rate of change, and we can define it precisely.\n\n### Prerequisites\n- Algebraic manipulation\n\n### The idea\nThe gradient of a curve changes from point to point. We estimate it using the secant slope.\n\n### Build the idea\nUse the difference quotient $\frac{f(x+h)-f(x)}{h}$. As $h$ approaches zero, we get the tangent slope.\n\n### Worked example\nFor $f(x)=x^2$, the derivative is $2x$.\n\n### Summary\nFirst principles gives the concept; the power rule makes the process efficient.',
        prerequisites: ['n5-1'],
        practiceIds: ['practice-higher-1'],
        curriculumItemIds: ['higher-differentiation']
      },
      {
        id: 'higher-2',
        slug: 'power-rule-and-applications',
        title: 'Power rule and applications',
        course: 'higher',
        area: 'Calculus',
        summary: 'Apply the derivative rule efficiently and interpret graph behaviour.',
        content: "## Why this matters\nThe power rule lets us calculate derivatives quickly once the basic idea is understood.\n\n### The idea\nIf $f(x)=x^n$, then $f'(x)=nx^{n-1}$.\n\n### Summary\nThe rule gives us a fast path to many derivatives.",
        prerequisites: ['higher-1'],
        practiceIds: ['practice-higher-2'],
        curriculumItemIds: ['higher-power-rule']
      },
      {
        id: 'higher-3',
        slug: 'integration-and-area',
        title: 'Integration and area',
        course: 'higher',
        area: 'Calculus',
        summary: 'Connect integration to accumulation and the calculation of area.',
        content: '## Why this matters\nIntegration lets us add up infinitely many tiny changes.\n\n### The idea\nA definite integral measures accumulation over an interval.\n\n### Summary\nIntegration is the reverse process of differentiation.',
        prerequisites: ['higher-2'],
        practiceIds: ['practice-higher-3'],
        curriculumItemIds: ['higher-integration']
      },
      {
        id: 'higher-4',
        slug: 'exponential-and-logarithmic-functions',
        title: 'Exponential and logarithmic functions',
        course: 'higher',
        area: 'Functions',
        summary: 'Interpret growth, decay and the inverse relationship between exponentials and logarithms.',
        content: '## Why this matters\nMany natural processes grow or decay exponentially.\n\n### The idea\nLogarithms are the inverse of exponentials and help us solve growth equations.\n\n### Summary\nExponentials and logarithms are closely linked families of functions.',
        prerequisites: ['n5-4'],
        practiceIds: ['practice-higher-4'],
        curriculumItemIds: ['higher-logarithms']
      },
      {
        id: 'higher-5',
        slug: 'trigonometric-functions-and-calculus',
        title: 'Trigonometric functions and calculus',
        course: 'higher',
        area: 'Trigonometry',
        summary: 'Use identities and calculus with trigonometric functions carefully and accurately.',
        content: '## Why this matters\nTrig functions describe periodic behaviour in waves and motion.\n\n### The idea\nTrigonometry and calculus can be combined to understand rates of change in cycles.\n\n### Summary\nPeriodic functions require both geometric insight and analytic methods.',
        prerequisites: ['n5-5'],
        practiceIds: ['practice-higher-5'],
        curriculumItemIds: ['higher-trig']
      },
      {
        id: 'higher-6',
        slug: 'algebra-and-sequences',
        title: 'Algebra and sequences',
        course: 'higher',
        area: 'Algebra',
        summary: 'Reason about algebraic structure and general terms in sequences.',
        content: '## Why this matters\nSequences show how patterns can be described precisely and extended.\n\n### The idea\nA general term gives a rule for every term in a sequence.\n\n### Summary\nPatterns become powerful when they can be described symbolically.',
        prerequisites: ['n5-1'],
        practiceIds: ['practice-higher-6'],
        curriculumItemIds: ['higher-sequences']
      }
    ],
    practiceSets: [
      {
        id: 'practice-higher-1',
        title: 'Higher calculus practice',
        course: 'higher',
        summary: 'Practice differentiation from first principles and simple rule-based differentiation.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-higher-2',
        title: 'Power rule practice',
        course: 'higher',
        summary: 'Differentiate powers and interpret turning points.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-higher-3',
        title: 'Integration practice',
        course: 'higher',
        summary: 'Calculate areas and interpret the meaning of accumulation.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-higher-4',
        title: 'Exponentials and logarithms',
        course: 'higher',
        summary: 'Solve growth and decay questions using exponentials.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-higher-5',
        title: 'Trigonometric calculus',
        course: 'higher',
        summary: 'Apply calculus to periodic functions and trigonometric identities.',
        questions: ['Q1', 'Q2']
      },
      {
        id: 'practice-higher-6',
        title: 'Sequences and algebra',
        course: 'higher',
        summary: 'Work with general terms and algebraic structure in sequences.',
        questions: ['Q1', 'Q2']
      }
    ]
  }
];

export function getCourseBySlug(slug: string) {
  return courseCatalog.find((course) => course.slug === slug);
}

export function getLessonById(id: string) {
  return courseCatalog.flatMap((course) => course.lessons).find((lesson) => lesson.id === id);
}

export function getPracticeSetById(id: string) {
  return courseCatalog.flatMap((course) => course.practiceSets).find((set) => set.id === id);
}

export function getLessonBySlug(courseSlug: string, lessonSlug: string) {
  const course = getCourseBySlug(courseSlug);
  return course?.lessons.find((lesson) => lesson.slug === lessonSlug);
}
