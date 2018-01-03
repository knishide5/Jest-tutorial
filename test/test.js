import React from 'react';
import { shallow, mount, render} from 'enzyme';

import Foo from '../Foo';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow().contains(<div className='foo'>Bar</div>)).toBe(true);
  });
});
