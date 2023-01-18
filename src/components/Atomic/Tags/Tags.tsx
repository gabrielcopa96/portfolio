import { typePropTags } from '../../../interfaces/components/tags.interface';



const Tags = ( { text }: typePropTags ) => {
   return (
      <div>
         <a className="tag">
            {text}
         </a>
      </div>
   )
}

export default Tags