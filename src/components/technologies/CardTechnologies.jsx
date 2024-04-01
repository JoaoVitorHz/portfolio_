import { FaCheck } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { BsTerminalPlus } from "react-icons/bs";

import { FrontEnd, BackEnd, OtherTechnologies } from "@/utils/Technologies";

export default function CardTechnologies(props){
    return(
        <div className="border rounded-md p-10 flex-1 ">
            <div className="w-full flex flex-col items-center mb-10">
                <div className="w-[100px] h-[100px] rounded-full bg-[#147efb] flex justify-center items-center mb-5">

                    {props.specialty == 'Front-End' &&  <FaCode className="text-white text-3xl"/>}
                    {props.specialty == 'Back-End' &&  <FaServer  className="text-white text-3xl"/>}
                    {props.specialty == 'Other' &&  <BsTerminalPlus  className="text-white text-3xl"/>}
                
                </div>
                <span>
                    {props.specialty == 'Front-End' && 'Front-End'}
                    {props.specialty == 'Back-End' &&  'Back-End'}
                    {props.specialty == 'Other' &&  'Outros Conhecimentos'}
                </span>
            </div>

            <ul className="flex flex-col gap-3">
                {props.specialty == 'Front-End' && 
                    FrontEnd.map((Technologie) => <li className="flex items-center gap-3"> <FaCheck className="text-[#147efb]" /> {Technologie}</li>)
                }
                {props.specialty == 'Back-End' && 
                    BackEnd.map((Technologie) => <li className="flex items-center gap-3"> <FaCheck className="text-[#147efb]" /> {Technologie}</li>)
                }
                {props.specialty == 'Other' && 
                    OtherTechnologies.map((Technologie) => <li className="flex items-center gap-3"> <FaCheck className="text-[#147efb]" /> {Technologie}</li>)
                }
            </ul>
        </div>
    )
}