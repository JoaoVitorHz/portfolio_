export default function SectionTitle(props){
    return(
        <div className="self-start title-desc">
            <span className="uppercase font-semibold text-[#147efb] text-[17px] mb-[10px]">{props.title}</span>
            <h3 
                className={`${props.subTitleColor == 'gray' ? 'text-gray-400' : 'text-black'} text-[25px] leading-[1.4] font-bold`}
            >
                {props.subTitle}
            </h3>
        </div>
    )
}