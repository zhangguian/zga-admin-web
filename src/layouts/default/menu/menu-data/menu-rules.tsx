import type {MenuProps} from "@/layouts/default/menu/types.ts";
import Icon from "@/components/icon";

export const  menuRuleData:MenuProps['data'] = [
  {
    title: '看板',
    items: [
      {
        title: '工作台',
        path: '/',
        icon: <Icon icon="local:ic-workbench" size="24" />
      },
      {
        title: '分析',
        path: '/analysis',
        icon: <Icon icon="local:ic-analysis" size="24" />
      }
    ]
  }
]