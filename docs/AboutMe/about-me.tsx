import React from 'react';
import './index.css'
import { Avatar } from 'antd';
import {
  AntDesignOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  GlobalOutlined, ReadOutlined,
  TwitterOutlined,
  UserOutlined
} from '@ant-design/icons';

export default () => {

  const name = '张三';
  const shortInfo = 'Assistant professor and Presidential Young Fellow at CUHKSZ. 国家海外高层次人才.';

  const location  = 'Shenzhen, China'

  return <div className="page">
    <div className="sidebar">
      <div className={'profile'}>
        <Avatar
          size={{xs: 48, sm: 64, md: 80, lg: 128, xl: 160, xxl: 200}}
          src={'https://api.dicebear.com/7.x/miniavs/svg?seed=1'}
        />
        <div className={'info'}>
          <div className={'name'}>
            {name}
          </div>
          <div className={'shortInfo'}>
            {shortInfo}
          </div>
        </div>
      </div>
      <div className={'link'}>
        <div><EnvironmentOutlined className={'icon'}/>{location}</div>
        <div><GithubOutlined className={'icon'}/>Github</div>
        <div><TwitterOutlined className={'icon'}/>Twitter</div>
        <div><GlobalOutlined  className={'icon'}/>Email</div>
        <div><ReadOutlined  className={'icon'}/>Google Scholar</div>
      </div>
    </div>
    <div className='content'>

    </div>
  </div>
}
