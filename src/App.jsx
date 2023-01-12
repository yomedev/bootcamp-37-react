import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Layout } from './components/Layout';
import { Posts } from './components/Posts';
import { AuthProvider } from './context/AuthContext';
import { Rerender } from './components/Rerender/Rerender';
import { ReactQueryPosts } from './components/Posts/ReactQueryPosts';
import { AbortRequest } from './components/AbortRequest/AbortRequest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <Tabs>
            <TabList>
              <Tab>React Query Posts</Tab>
              <Tab>Posts</Tab>
              <Tab>Abort Request</Tab>
              <Tab>Rerender</Tab>
            </TabList>

            <TabPanel>
              <ReactQueryPosts />
            </TabPanel>
            <TabPanel>
              <Posts />
            </TabPanel>
            <TabPanel>
              <AbortRequest />
            </TabPanel>
            <TabPanel>
              <Rerender />
            </TabPanel>
          </Tabs>
          <ReactQueryDevtools initialIsOpen={false} />
        </Layout>
      </AuthProvider>
    </QueryClientProvider>
  );
};
