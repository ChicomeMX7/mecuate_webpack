import { globalStyles, gradients } from '@/stitches.conf'
import { Layout } from '@/components/Layout'


function App() {
    globalStyles()
    gradients()

    return (        
      <Layout className="App" />
    )
}

export default App
