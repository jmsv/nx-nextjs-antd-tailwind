import React from 'react';
import { Button, Collapse } from 'antd';
import { HeartOutlined, StarOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.less file.
   */
  return (
    <div>
      <h2 className="text-center font-md mt-10 mb-2">Resources &amp; Tools</h2>

      <p className="text-center">
        Thank you for using and showing some <HeartOutlined /> for Nx.
      </p>

      <div className="flex items-center justify-center github-star-container">
        <a
          href="https://github.com/nrwl/nx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-2"
        >
          If you like Nx, please give it a star:{' '}
          <Button type="primary" size="small" icon={<StarOutlined />}>
            Star
          </Button>
        </a>
      </div>

      <p className="text-center">
        Here are some links to help you get started.
      </p>

      <ul className="list-none flex flex-col gap-3 p-0 text-center">
        <li className="py-2 px-4 border border-solid border-gray-300 rounded-md w-full hover:bg-blue-50">
          <a
            className="flex items-center justify-center"
            href="https://egghead.io/playlists/scale-react-development-with-nx-4038"
          >
            Scale React Development with Nx (Course)
          </a>
        </li>

        <li className="py-2 px-4 border border-solid border-gray-300 rounded-md w-full hover:bg-blue-50">
          <a
            className="flex items-center justify-center"
            href="https://nx.dev/latest/react/tutorial/01-create-application"
          >
            Interactive tutorial
          </a>
        </li>

        <li className="py-2 px-4 border border-solid border-gray-300 rounded-md w-full hover:bg-blue-50">
          <a
            className="flex flex-row items-center justify-center gap-2"
            href="https://nx.app/"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
                fill="#0E2039"
              />
              <path
                d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
                fill="white"
              />
            </svg>
            <span>Nx Cloud</span>
          </a>
        </li>
      </ul>

      <h2>Next Steps</h2>
      <p className="text-center">Here are some things you can do with Nx.</p>

      <Collapse defaultActiveKey={['1']}>
        <Panel header="Add UI library" key="1">
          <pre>{`# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`}</pre>
        </Panel>
        <Panel header="View dependency graph" key="2">
          <pre>{`nx dep-graph`}</pre>
        </Panel>
        <Panel header="Run affected commands" key="3">
          <pre>{`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
`}</pre>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Index;
