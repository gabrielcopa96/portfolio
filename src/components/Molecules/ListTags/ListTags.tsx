import Tags from "../../Atomic/Tags/Tags";
import { typePropListTags } from '../../../interfaces/components/tags.interface';

const ListTags = ({ tags }: typePropListTags) => {
   return (
      <div className="list-tags">
         {
            tags.map((tag: string, index: number) => {
               return (
                  <Tags key={index} text={tag}/>
               )
            })
         }
      </div>
   )
}

export default ListTags;