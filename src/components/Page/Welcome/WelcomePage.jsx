import PageHeader from "../../Header/Page/PageHeader";
import WelcomeView from "../../View/Welcome/WelcomeView";

const WelcomePage = () => {

  return (
    <div className="text-center container mx-auto">
      <PageHeader title="Welcome visitor, please tell us who you are !"/>
      <WelcomeView/>
    </div>
  )
}

export default WelcomePage;