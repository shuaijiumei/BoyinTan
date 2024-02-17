import React from 'react';
import './index.css'

import SideBar from "../../component/SideBar";

import ReactMarkdown from 'react-markdown';

export default () => {

  const name = '张三';
  const shortInfo = `Assistant professor and Presidential Young Fellow at CUHKSZ. 国家海外高层次人才.`;
  const avatarSrc = 'https://pinjiahe.github.io/images/profile.jpg';
  const selfIntroduction = `Pinjia He is an assistant professor in the School of Data Science at The Chinese University of Hong Kong, Shenzhen. Before joining CUHKSZ, he was a postdoctoral scholar in the Department of Computer Science at ETH Zurich, mentored by Prof. Zhendong Su. He received his Ph.D. in Computer Science and Engineering from The Chinese University of Hong Kong, supervised by Prof. Michael R. Lyu. He received a B.E. in Computer Science and Technology from South China University of Technology.`
  // TODO 保留 markdown 格式
  const markdown = `
# 标题 1

这是一段示例文本，以下是一些Markdown的基本语法示例。

## 小标题 1

- 列表项1
- 列表项2
- 列表项3

### 小小标题 1

这是一段*斜体*文本，这是一段**粗体**文本。

#### 小小小标题 1

1. 有序列表项1
2. 有序列表项2
3. 有序列表项3

##### 小小小小标题 1

> 这是一个引用。

###### 最小标题

\`\`\`python
# 这是一段代码
print("Hello, Markdown!")

`

  const location  = 'Shenzhen, China'
  const info = {
    github:'https://github.com/PinjiaHe',
    twitter:'',
    email:'',
    googleScholar:'',
  }

  return <div className="page">
    <SideBar/>
    <div className='content'>
      <div className={'title'}>Services</div>
      <div className={'markdown'}><ReactMarkdown children={markdown} /></div>
    </div>
  </div>
}
