import React from 'react';
import ReactDOM from 'react-dom';
// import {FamilyCard} from '~components';


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

const cppCodeBlock = indentNormalizer(`
#include <iostream>
#include <cstdlib>
#include <sstream>
#include <pthread.h>

struct thread_data_t
{
   int  thread_id;
   std::string message;
};

void *print_thread_message(void *thread_arg)
{
   struct thread_data_t *thread_data;
   thread_data = (struct thread_data_t *) thread_arg;

   cout << "Thread ID: " << thread_data->thread_id;
   cout << "Message: " << thread_data->message << endl;

   pthread_exit(NULL);
}

int main()
{
  pthread_t threads[NUM_THREADS];
  struct thread_data_t thread_data[NUM_THREADS];

  for (int i = 0; i < NUM_THREADS; i++)
  {
    auto curried_add = [](int x) -> function<int(int)> { return [=](int y) { return x + y; }; };
    auto answer = curried_add(i)(5);

    std::stringstream message;
    message << "The math result is " << answer << "!";
    thread_data.thread_id = i;
    thread_data.message = message.str();
    int err = pthread_create(&threads, NULL, print_thread_message, (void *)&thread_data[i]);

    if (err)
    {
      exit(-1)
    }
  }

  return 0;
}`);

const cppCodeBlock2 = indentNormalizer(`
proc sort data=&indata;
  by usubjid trtgrp lab;
run;

proc sort data=base;
  by usubjid trtgrp lab ;
run;

data baseline (keep=usubjid base_value lab trtgrp) postbaseline (keep=usubjid postbase_val lab trtgrp) ;
  set &indata(in=a) base(in=b );
  if trtgrp=&trtgrp;
  if b then do; base_value = cholesterol; output baseline;end;
  if a then do;postbase_val= cholesterol; output postbaseline;end;
run;

proc sort data=baseline;
  by usubjid lab;
run;

proc sort data=postbaseline;
  by usubjid lab ;
run;

data merge&outdata;
  merge baseline postbaseline;
  by usubjid lab ;
  base_val=3;
run;

proc sort data=merge&outdata;
  by lab base_val;
run;


proc means data=merge&outdata noprint;
  by lab base_val;
  var abnormal normal missing ;
  output out=stat1 sum=cnt1 cnt2 cnt3 ;
run;

proc sort data=stat1 out=temp2(keep=lab) nodupkey;
  by lab;
run;

data temp3;
  set temp2;
  by lab;
  retain cnt1-cnt3 0;
  do base_val=1 to 3;
  output;
end;
run;`);

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide>
      <Markdown>
        {`
          # Strengths
          - Great architecture (isolated modular components)*
          - Great application development*
          - Well-curated team of strong team of developers

          ***** *within the confines of SAS, VBA and sharepoint*
        `}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
          # Weaknesses

          - "Locked in" to Microsoft products 
          - Opinionated framework
          - Limited "tool box" for building solutions
 
        `}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
          # Opportunities

          - Microservices
          - Cloud services
            - "Function as a Service (FaaS)"
            - Security
            - Kubernetes (Federates ability to do "PoC" projects)
          - Open source projects
          - Commandline tools
        `}
      </Markdown>
    </Slide>

    <Slide>
      <Markdown>
        {`
          # Threats

          - Learning curve for developers
          - Resistance from IT to non-microsoft products 
        `}
      </Markdown>
    </Slide>

    {/* <Slide>
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
    </Slide> */}

    {/* <Slide>
      <FlexBox height="100%">
        <SpectacleLogo size={500} />
      </FlexBox>
    </Slide>
    <Slide>
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
    <Slide transitionEffect="slide">
      <Heading>Code Blocks</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [1, 5],
          [23, 25],
          [40, 42]
        ]}
      >
        {(value, step) => (
          <Box position="relative">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              // fontSize={18}
              language="sas"
              autoFillHeight
            >
              {cppCodeBlock2}
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
                  Top of the file
                </Text>
              )}

              {step === 1 && (
                <Text fontSize="1.5rem" margin="0rem">
                  This is a note!
                </Text>
              )}

              {step === 2 && (
                <Text fontSize="1.5rem" margin="0rem">
                  You can use the stepper state to render whatever you like as
                  you step through the code.
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Stepper>
      <Text>
        Code Blocks now auto size and scroll when there is an overflow of
        content! They also auto-wrap longer lines.
      </Text>
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
