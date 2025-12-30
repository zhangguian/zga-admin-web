import type {MenuProps} from "@/layouts/default/menu/types.ts";

export default function VMiniMenu({data, className, ...props}: MenuProps) {
  return (
    <div>
      <ul>
        {
          data.map((item, index) => (
            <li key={item.title || index}>{item.title}</li>
          ))
        }
      </ul>
    </div>
  )
}