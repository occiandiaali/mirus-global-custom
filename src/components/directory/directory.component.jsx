import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332_960_720.jpg',
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'jackets',
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/02/19/10/21/girl-1209193_960_720.jpg',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'shoes',
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/11/19/11/33/footwear-1838767_960_720.jpg',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'shirts',
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/11/22/19/08/blur-1850082_960_720.jpg',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'fragrances',
          imageUrl:
            'https://cdn.pixabay.com/photo/2019/04/06/19/20/oil-4108079_960_720.jpg',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
} //class

export default Directory;
