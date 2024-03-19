import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from "../assets/ml-slider1-1.jpg"
const Slider = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <img className='w-[200px]' src={img1} alt="" />
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Slider;