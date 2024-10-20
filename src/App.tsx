import React from 'react';
import { Button, Flex } from 'antd';
import ThemeProvider from './providers/theme-provider';

const App : React.FC = () => {

  return (
    <ThemeProvider>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Flex gap="small" wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
      </div>
    </ThemeProvider>
  )
}

export default App
