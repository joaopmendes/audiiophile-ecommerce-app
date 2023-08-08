'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const QueryProvider: React.FC<React.PropsWithChildren> = (props) => {
    return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
export default QueryProvider;
