import HeaderBox from "@/components/HeaderBox";
import Rightsidebar from "@/components/Rightsidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";



const Home = () => {

    const loggedIn = {firstName: 'Adriana', lastName: "jsm", email: "contact@gmil.com"};
  return (

    <section className="home">
        <div className="home-content">
        <header className="home-header">
        <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
           <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
            

            </header>

            Recent transaction
        </div>

        <Rightsidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50}, { currentBalance: 150.50}]}
         />
    </section>  
  )
}

export default Home