import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const featuresArray = [
    ` Seatheart. The luscious Janet loveseat is the perfect place to cosy up or unwind. Designed for comfort, the straight lines of the frame are softened by the plush cushioning. The piping all around helps define the petite sofa for two. Available in two delicious colours and a soft floral print, it'll be at home in living rooms and bedrooms.`,
    `Fabric upholstery`, `Cushion firmness: Medium`, `Inner frame made of solid Eucalyptus wood`,
    `Legs made from Rubber Wood`, `Please refer to images for dimension details`]
const careInstructionArray = [
    ` Always use coasters or mats while keeping hot, cold or wet materials on the surface else this can affect the polish.`, `Any spillage should be wiped dry with a soft cloth immediately as there is a chance of staining.`,
    `Any cleaning needs to be done with water only`,
    `For an ageless look of the product, we recommend a 6 monthly wax rub-down for solid-wood furniture. Wood wax is easily available in online stores & local hardware stores.`,
    `Colour / polish can fade due to prolonged exposure to sunlight.`, `Avoid sitting on the arms of the sofas and chairs as it exerts excess pressure and can cause premature wear and distortion of the padding and fabric.`, `Direct sunlight over a prolonged period of time can cause fading and/or deterioration of fabric. When planning your room, arrange your furniture so that it is protected from sunlight. `, `Loose fitted sofa covers and cushions may be removed and given for professional dry cleaning as required.`,
    `Strictly avoid using bleach when washing your upholstery.`,
    `Severe spills and stains should only be removed by professional upholstery cleaners.`
]
const qualityPromise = [
`All wood products, go through an intense 3-step treatment for any termites, borers and pests`,
`The wood used in the furniture is perfectly seasoned for optimum moisture content, to reduce the possibility of seasonal expansion or contraction of the products.`,
`Post manufacturing, each product has gone through a stringent quality checking process in 3-stages, with a checkpoint of over 50 quality aspects`,
`We work very closely with our vendors to ensure best-in-class quality of raw material and finished designs.`,
`Most of our furniture is made of natural materials, which will have natural differences and the occasional minor blemish`
]
const returnsArray = [
   ` We offer cancellations until the product is Shipped. Returns within 7 days of the delivery are eligible for damaged or defective products. To know more please refer to Returns Policy`,
`Note: Please do not unbox or assemble the product yourself. Cancellations/ Returns/ Warranty will be void if not unboxed or assembled by Urban Ladder authorized furniture experts.`,
`For products purchased with a trial period, eligibility for return within that trial period would be that the product would need to be clean and free from any damages along with the availability of the complete original packaging material.`
]
export default function ItemAccordion() {
    return (
        <div className='item-details-Accordion'>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h5>FEATURES</h5>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {featuresArray.map((element) => (<li key={element}>{element}</li>))}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h5>CARE INSTRUCTIONS</h5>
                </AccordionSummary>
                <AccordionDetails>
                    {careInstructionArray.map((element) => (<li key={element}>{element}</li>))}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h5>QUALITY PROMISE</h5>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {qualityPromise.map((element) => (<li key={element}>{element}</li>))}
                        <li><strong>NOTE : Furnigoods makes all efforts to ensure that products with wood finishes like Teak, Mahogany etc are colour matched to ensure minimum variations between other products of the same colour. There could be minor variations in colour especially over different batches of products over a period of time.  Please consider this while adding products to your existing furniture set.  </strong></li>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h5>RETURNS</h5>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {returnsArray.map((element) => (<li key={element}>{element}</li>))}
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
