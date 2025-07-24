import { BrowserRouter, Route, Routes } from "react-router"
import Signin from "./page/Signin"
import Signup from "./page/Signup"
import NewsFeed from "./page/NewsFeed"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <BrowserRouter>
        <Routes>
          <Route index element={<Signin />}  />
          <Route path="signup" element={<Signup />} />

          <Route path="newsfeed" element={<NewsFeed />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
