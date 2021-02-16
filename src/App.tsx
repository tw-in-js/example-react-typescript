import * as React from 'react';
import { tw } from 'twind';
import { Alert } from './components/Alert';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Emoji } from './components/Emoji';
import { ReactLogo } from './components/ReactLogo';
import { Tips } from './components/Tips';

// Styled components
import { Avatar } from './components/Avatar';
import { Pill } from './components/Pill';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { SkipLink } from './components/SkipLink';

import type { InlineDirectiveMap } from './types';

// You could keep an object of inline directives for any
// elements that you do not want to abstract into components

const directives: InlineDirectiveMap<string> = {
  section: ({ tw }) => tw`children:(m(1 md:2)) mb-4 p-2`,
  h3: ({ tw }) =>
    tw`font(semibold) text(gray-500 uppercase base) tracking-wide`,
};

export default function App() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className={tw`flex flex-col bg-gray-100 min-h-screen`}>
      <SkipLink contentId="main-content" />
      <Header>
        <ReactLogo spin={true} className="w(32 md:16) h(32 md:16)" />
        <h1 className={tw`text(3xl center md:left) font(thin)`}>
          React + TypeScript + Twind = <Emoji symbol="💙" alt="Love" />
        </h1>
      </Header>
      <main id="main-content" className={tw`flex-1 container mx-auto p-4`}>
        <Tips />
        <Card title="Button Examples" elevation={4}>
          <section className={tw`${directives.section}`}>
            <h3 className={tw`${directives.h3}`}>Default</h3>
            <Button size="sm">xs primary</Button>
            <Button size="md" variant="success">
              md success
            </Button>
            <Button size="lg" variant="warning">
              lg warning
            </Button>
            <Button size="xl" variant="danger">
              xl danger
            </Button>
          </section>
          <section className={tw`${directives.section}`}>
            <h3 className={tw`${directives.h3}`}>Rounded</h3>
            <Button size="sm" round={true}>
              xs primary
            </Button>
            <Button size="md" variant="success" round={true}>
              md success
            </Button>
            <Button size="lg" variant="warning" round={true}>
              lg warning
            </Button>
            <Button size="xl" variant="danger" round={true}>
              xl danger
            </Button>
          </section>
          <section className={tw`${directives.section}`}>
            <h3 className={tw`${directives.h3}`}>Disabled State</h3>
            <Button size="sm" round={true} disabled={true}>
              xs primary
            </Button>
            <Button size="md" variant="success" round={true} disabled={true}>
              md success
            </Button>
            <Button size="lg" variant="warning" round={true} disabled={true}>
              lg warning
            </Button>
            <Button size="xl" variant="danger" round={true} disabled={true}>
              xl danger
            </Button>
          </section>
          <section className={tw`${directives.section}`}>
            <h3 className={tw`${directives.h3}`}>Loading State</h3>
            <Button size="sm" round={true} loading={true}>
              xs primary
            </Button>
            <Button size="md" variant="success" round={true} loading={true}>
              md success
            </Button>
            <Button size="lg" variant="warning" round={true} loading={true}>
              lg warning
            </Button>
            <Button size="xl" variant="danger" round={true} loading={true}>
              xl danger
            </Button>
          </section>
        </Card>

        <Card
          title="Alert Examples"
          className={tw`my-8 children:my-2`}
          elevation={4}
        >
          <section className={tw`${directives.section}`}>
            <Alert>This is a default alert</Alert>
            <Alert variant="success">This is a success alert</Alert>
            <Alert variant="primary">This is a primary alert</Alert>
            <Alert variant="warning">This is a warning alert</Alert>
            <Alert variant="error" closable={true}>
              This is an error alert
            </Alert>
            <Alert
              title="This is an optional title"
              variant="info"
              closable={true}
            >
              This is an info alert that is closable
            </Alert>
          </section>
        </Card>

        <Card title="Styled API Examples" className={tw`my-8`} elevation={4}>
          <section className={tw`${directives.section}`}>
            <h3 className={tw`${directives.h3}`}>Pill</h3>
            <Pill color="blue">Blue Pill</Pill>
            <Pill color="gray">Gray Pill</Pill>
            <Pill color="green">Green Pill</Pill>
            <Pill color="indigo">Indigo Pill</Pill>
            <Pill color="orange">Orange Pill</Pill>
            <Pill color="pink">Pink Pill</Pill>
            <Pill color="purple">Purple Pill</Pill>
            <Pill color="red">Red Pill</Pill>
            <Pill color="teal">Teal Pill</Pill>
            <Pill color="yellow">Yellow Pill</Pill>
          </section>
          <section className={tw`${directives.section}`}>
            <h3 className={tw`${directives.h3}`}>Pill (sizes)</h3>
            <Pill color="blue" size="sm">
              Sm Pill
            </Pill>
            <Pill color="gray" size="md">
              Md Pill
            </Pill>
            <Pill color="green" size="lg">
              Lg Pill
            </Pill>
          </section>
          <section className={tw`${directives.section}`}>
            <h3 className={tw`${directives.h3}`}>Avatar</h3>
            <Avatar size="sm" src="https://i.pravatar.cc/150" />
            <Avatar size="md" src="https://i.pravatar.cc/150" />
            <Avatar size="lg" src="https://i.pravatar.cc/150" />
          </section>

          <section className={tw`${directives.section}`}>
            <h3 className={tw`${directives.h3}`}>Avatar (Round)</h3>
            <Avatar size="sm" round={true} src="https://i.pravatar.cc/150" />
            <Avatar size="md" round={true} src="https://i.pravatar.cc/150" />
            <Avatar size="lg" round={true} src="https://i.pravatar.cc/150" />
          </section>

          <section className={tw`${directives.section}`}>
            <h3 className={tw`${directives.h3}`}>Ref Example</h3>
            <Button
              onClick={() => inputRef.current?.focus()}
              className="flex-shrink-0"
            >
              Focus the input {'->'}
            </Button>
            <Input
              // Property 'type' does not exist on type 'IntrinsicAttributes & BaseProps'.
              type="email"
              placeholder="Enter your email"
              // Ref seems to work correctly!
              ref={inputRef}
              className="mx(auto md:4) mt(4 md:0)"
            />
          </section>
        </Card>
      </main>
      {/* This feels kind of weird. See comments. */}
      <Header as="footer">Goodbye 2020!</Header>
    </div>
  );
}
