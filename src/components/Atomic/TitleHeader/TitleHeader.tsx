
const TitleHeader = ({ text }: { text: string }) => {

   const [firstTitle, secondTitle, ThirdTitle] = text.split(" ")

   return (
      <div className="title-header">
         <h1 className="container-title-header">
            {firstTitle} {secondTitle}<span className="title-header-green">{ThirdTitle}</span>
         </h1>
      </div>
   )
}

export default TitleHeader;