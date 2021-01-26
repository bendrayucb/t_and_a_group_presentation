import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'antd';


import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  Link,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';


document.title = "SSI Standards"

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

const exampleJsonBlock = indentNormalizer(`
{
	"project": [{
		"projectCode": "ABCD",
		"id": "1",
		"studies": [{
				"studyCode": "ABCD1234",
				"Inication": "COVID Vaccine",
				"Phase": "1",
				"created": "2020-03-22T14:56:29.000Z"
			},
			{
				"studycode": "EFGH5678",
				"Inication": "COVID Vaccine",
				"Phase": "3",
				"created": "2021-01-01T14:56:29.000Z"
      },
			{
				"studycode": "IJKL9101",
				"Inication": "Oncology",
				"Phase": "3",
				"created": "2022-01-01T14:56:29.000Z"
			}
		]
	}]
}`);

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">

    <Slide>
      <FlexBox height="100%">
        <Heading>SSI SWOT Analysis</Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <Markdown>
        {`
          # Strengths
          - Great architecture (isolated modular components)*
          - Great application development*
          - Well-curated team of strong developers

          ***** *within the confines of SAS, VBA and sharepoint*
        `}
      </Markdown>
      <Notes>
        <p>The architecture and code is well-written for SAS and VBA so it is clearly a decent team of programmers - however the constraints of doing everything in SAS and VBA means that the "what is possible" is significantly limited both in terms of functionality, testability and replaceability</p>
      </Notes>
    </Slide>

    <Slide>
      <Markdown>
        {`
          # Weaknesses

          - "Locked in" to Microsoft tools
          - Opinionated framework
          - Limited "tool box" of options for building solutions
          - Learning curve for developers
        `}
      </Markdown>
      <Notes>
        <ul>
          <li>Conversion to strength: Liberate UCB to implement the "happy path" whether it is microsoft or open source or "other" (many companies are presesnting API endpoints now)</li>
          <li>Conversion to strength: Expanding upon what Giuseppe has done with isolated services, we can isolate them further for "hot swapping" (see later slide for decoupled microservices)</li>
          <li>Conversion to strength: Being able to use any language/service in isolation, we have the freedom and peace of mine that we are not locking it into a monolithic application</li>
          <li>Conversion to strength: Training and experimentation (cloud/kubernetes for sandboxing development would greatly help here)</li>
        </ul>
      </Notes>
    </Slide>

    <Slide>
      <Markdown>
        {`
          # Opportunities

          - Microservices
          - Cloud services / Kubernetes on-prem
            - "Function as a Service (FaaS)"
            - Security
          - Open source projects
          - Command line tools
        `}
      </Markdown>
      <Notes>
        <ul>
          <li>Microservices are typically based on a server but encapsulates any isolated applications that take in and/or generate output</li>
          <li>Cloud providers and kubernetes provide ability to experiment, learn and ultimately "fail fast"</li>
          <li>Open source projects allow "free work" from collaborators as well as raise profile of the company</li>
          <li>Powerful and good productivity tool and for reducing human error</li>
        </ul>
      </Notes>
    </Slide>

    <Slide>
      <Markdown>
        {`
          # Threats
          - Resistance from IT to non-microsoft products 
        `}
      </Markdown>
      <Notes>
        <ul>
          <li>Conversion to opportunity... we could team up with IT or let them take the credit for setting up a connection to cloud provider (I can work with them to set up a VPN to AWS for example)</li>
          <li>Conversion to opportunity... If we only need "in house" development, we could perhaps have our own cloud account and work in isolation with NON-CONFIDENTIAL data (eg autotrial program generation?)</li>
          <li>I don't know the situation/politics in UCB yet looking as an outsider, I see a relatively "quick win" would be using AWS S3 encrypted object storage....</li>
          <li>It has innate encryption, version control and tight read/write access rules</li>
          <li>Anyone can create an AWS account for free to experiment - just needs a credit card and email associated to it and has a generous "free" allowance for a lot of services</li>
        </ul>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading>🛠 Assessment of current tools 🛠</Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <Markdown>
        {`
          # Current services/technologies

          | Task/Feature                                         | Current    | Possibilities                                            |
          |------------------------------------------------------|------------|----------------------------------------------------------|
          | Data ETL                                             | SAS        | Python (Rust in some use cases)                          |
          | User Interfaces                                      | VBA        | Web app (Javascript, .Net), desktop app (C#, .Net, Rust) |
          | APIs                                                 | ?          | REST, graphql                                            |
          | Documentation                                        | Sharepoint | Auto-generated (eg swagger.io, pdoc3)                    |
          | Version Control                                      | SVN?       | Git for code, SVN for datasets                           |
        `}
      </Markdown>
    </Slide>

    <Slide>
      <FlexBox height="100%">
        <Heading>🛠 Tools available to us 🛠</Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          <i>Continuous Intergration/ Continuous Deployment (CI/CD)</i>
        </Heading>
        <UnorderedList>
          <ListItem>Promotes testing as "first class citizen" and not an after-thought</ListItem>
          <ListItem>Streamlines the deployment workflow</ListItem>
          <ListItem>Reduces human error</ListItem>
          <ListItem>Formalises deployment workflow (optional multiple sign-offs)</ListItem>
        </UnorderedList>
        <FlexBox>
          <Link href="https://youtu.be/Rq5TQlPyr8g">https://youtu.be/Rq5TQlPyr8g</Link>
          {/* <Text>QR Code link here</Text> */}
        </FlexBox>
        
      </FlexBox>
      <Notes>
        <ul>
          <li>CI/CD encourages developers to consider testing as central to development process: Unit / Integration / Regression</li>
          <li>Seamless automated workflow: When a developer commits a change, the backend runs the whole library of tests on the code. If anything fails it STOPS deployment. If it succeeds it can be presented to the business owner(s) to review and press the "DEPLOY" button (or even automatically deploy)</li>
          <li>
            
          </li>
          <li>It has innate encryption, version control and tight read/write access rules</li>
          <li>Anyone can create an AWS account for free to experiment - just needs a credit card and email associated to it and has a generous "free" allowance for a lot of services</li>
        </ul>
        <p>
          
        </p>
      </Notes>
    </Slide>


    <Slide transitionEffect="slide">
      <Heading>APIs & Decoupled Microservices (1/2)</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [2, 2],
          [5, 9],
          [12, 15]
        ]}
      >
        {(value, step) => (
          <Box position="relative">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              // fontSize={18}
              language="json"
              autoFillHeight
            >
              {exampleJsonBlock}
            </CodePane>

            <Box
              position="absolute"
              bottom="0rem"
              left="0rem"
              right="0rem"
              bg="black"
            >

              {step === 0 && (
                <Text fontSize="1.5rem" margin="0rem">
                  JSON object can as much or as little information as needed
                </Text>
              )}

              {step === 1 && (
                <Text fontSize="1.5rem" margin="0rem">
                  Project entity
                </Text>
              )}

              {step === 2 && (
                <Text fontSize="1.5rem" margin="0rem">
                  Nested stuy entities
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Stepper>
    </Slide>


    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          APIs & Decoupled Microservices (2/2)
        </Heading>
        <UnorderedList>
          <ListItem>API design</ListItem>
          <ListItem>CRUD transactions to database</ListItem>
          <ListItem>Future-proofed applications</ListItem>
          <ListItem>API versioning</ListItem>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>API Design - specifies requirements of input and output parameters</li>
          <li>While the majority of API actions are just requesting to READ data, it is also possible (if authenticated and authorised) to WRITE, UPDATE and DELETE</li>
          <li>Each microservice can be built/hosted/switched out in isolation. If anything becomes redundant or not fit for purpose it can be switched out. Only requirement is that the input/output parameters remain unchanged</li>
          <li>...and if input/output parameters DO change, then this is elegantly handled with API versioning</li>
          <li>API Versioning (either put "V1" into the URI or put it in a custom header)</li>
        </ul>
        <Link href="https://youtu.be/y0U-ZxgLu98">REST API: https://youtu.be/y0U-ZxgLu98</Link>
        <Link href="https://youtu.be/b7tMHnxzK34">GraphQL API: https://youtu.be/b7tMHnxzK34</Link>
        <Link href="https://www.youtube.com/watch?v=SouNISAnXlo">Microservices: https://www.youtube.com/watch?v=SouNISAnXlo</Link>
      </Notes>
    </Slide>





    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          Webhooks and Websockets
        </Heading>
        <UnorderedList>
          <ListItem>Webhooks: Trigger events in another service</ListItem>
          <ListItem>Websockets: Two-way communication</ListItem>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <p>
          Webhooks - App-to-app communication/triggers
          Websockets - 2-way communication between user(s) and application
        </p>
      </Notes>
    </Slide>



    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          Functions as a Service (FaaS)
        </Heading>
        <UnorderedList>
          <ListItem>API endpoint</ListItem>
          <ListItem>Language agnostic</ListItem>
          <ListItem>Highly available / scalable</ListItem>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>It is an endpoint that is not coupled to an application server</li>
          <li>The function can be written in almost any language (probably not SAS though)</li>
          <li>Highly-available (no downtime and hugely multi-concurrent users) and highly scalable (add more memory/CPU)</li>
        </ul>
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          Web Assembly
        </Heading>
        <UnorderedList>
          <ListItem>Compiled code running in the browser</ListItem>
          <ListItem>Harnesses clients CPU</ListItem>
          <ListItem>Memory-safe deployments</ListItem>
          <ListItem>Part of the Open Web platform</ListItem>
        </UnorderedList>
      </FlexBox>
      <Notes>
        <ul>
          <li>Probably as transformational as javascript was for the browser</li>
          <li>Web applications running at core CPU speed (eg with Rust)</li>
          <li>A memory-safe, sandboxed execution environment</li>
          <li>Open web platform: Asssured feature of all browsers. WebAssembly is designed to maintain the versionless, feature-tested, and backwards-compatible</li>
        </ul>
      </Notes>
    </Slide>










    {/* <Slide>
      <FlexBox height="100%">
        <Button type="primary">Primary Button</Button>
      </FlexBox>
    </Slide> */}




    {/* <Slide>
      <FlexBox height="100%">
        <SpectacleLogo size={500} />
        <FamilyCard />
      </FlexBox>
    </Slide> */}



    {/* <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Spectacle</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A ReactJS Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
      </FlexBox>
      <Notes>
        <p>
          Notes are shown in presenter mode. Open up
          localhost:3000/?presenterMode=true to see them.
        </p>
      </Notes>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear elementNum={0}>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            Just identify the order with the prop{' '}
            <CodeSpan>elementNum</CodeSpan>!
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>Out of order</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <Slide>
      <Markdown>
        {`
          # Layout Tables in Markdown

          | Browser         | Supported | Versions |
          |-----------------|-----------|----------|
          | Chrome          | Yes       | Last 2   |
          | Firefox         | Yes       | Last 2   |
          | Opera           | Yes       | Last 2   |
          | Edge (EdgeHTML) | No        |          |
          | IE 11           | No        |          |
        `}
      </Markdown>
    </Slide>
    <Markdown containsSlides>
      {`
        ### Even write multiple slides in Markdown
        > Wonderfully formatted quotes

        1. Even create
        2. Lists in Markdown


        - Or Unordered Lists
        - Too!!
        Notes: These are notes
        ---
        ### This slide was also generated in Markdown!

        \`\`\`jsx
        const evenCooler = "is that you can do code in Markdown";
        // You can even specify the syntax type!
        \`\`\`

        ### A slide can have multiple code blocks too.

        \`\`\`c
        char[] someString = "Popular languages like C too!";
        \`\`\`

        Notes: These are more notes
      `}
    </Markdown> */}
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
