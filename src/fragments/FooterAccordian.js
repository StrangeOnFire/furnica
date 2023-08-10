import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const navItems = ['Wardrobes','Dining','Beds','Studying','Lightning','Sofas','ShoeRacks'];
const aboutUsArray = ['About Us', 'Contact Us', 'Address', 'Material Glossary', 'Bulk Orders', 'Careers', 'Customer Reviews'];
const deliveryArray = ['Ahmedabad', 'Aurangabad', 'Bengaluru', 'Bharuch', 'Boisar', 'Chandigarh', 'Chennai',
    'Coimbatore', 'Dehradun', 'Delhi', 'Faridabad', 'Ghitorni', 'Gorakhpur', 'Hooghly', 'Hyderabad', 'Indore', 'Jaipur', 'Jamshedpur', 'Kanpur', 'Kolkata', 'Lucknow', 'Ludhiana', 'Mumbai', 'Noida', 'Palghar', 'Patna', 'Prayagraj', 'Pondicherry', 'Pune', 'Raipur', 'Ranchi', 'Thane', 'Vadodara']
const helpArray = ['Privacy Policy', 'Fees and Payment', 'Shipping & Delivery', 'Terms and Conditions',
    'Warranty, Return and Refund', 'EMI on Credit Cards']


export default function FooterAccordion() {
    return (
        <div className='FooterAccordion'>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h5>The Company:</h5>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {aboutUsArray.map((element) => (<li key={element}>{element}</li>))}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h5>Furniture Categories</h5>
                </AccordionSummary>
                <AccordionDetails>
                    {navItems.map((element) => (<li key={element}><Link to={`/${element}`}>{element}</Link></li>))}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h5>Need Help?</h5>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    {helpArray.map((element) => (<li key={element}>{element}</li>))}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h5>We Deliver To</h5>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {deliveryArray.map((element) => (<li key={element}>{element}</li>))}
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
