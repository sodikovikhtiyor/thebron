import { Container } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Account from "./components/Pages/Account/Account";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import AccInfo from "./components/Pages/Account/AccInfo";
import AccPrivacy from "./components/Pages/Account/AccPrivacy";
import AccPayment from "./components/Pages/Account/AccPayment";
import NoMatch from "./components/Pages/NoMatch";
function App() {
  return (
    <>
      <Container w="1200px" mx="auto" my="0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account">
            <Route index path="in" element={<Account />} />
            <Route path="info" element={<AccInfo />} />
            <Route path="payment" element={<AccPayment />} />
            <Route path="privacy" element={<AccPrivacy />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
      <Footer />
      {/* <Container w="1200px" mx="auto" my="0">
        <Showcase />
        <Categories />
      </Container>
      <hr /> */}
      {/* <Container w="1200px" mx="auto" my="0">
        <Filter />
        <Cards />
      </Container>
      <hr /> */}
      {/* <Container w="1200px" mx="auto" my="0"> */}
      {/* <Footer /> */}
      {/* </Container> */}
    </>
  );
  // return (
  //   <>
  //     <Login />
  //   </>
  // );
}

export default App;
