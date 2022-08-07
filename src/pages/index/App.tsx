import { globalStyles } from '@/stitches.conf'
import { gradientStyles } from "@/assets/styles/Gradients";
import { scrollStyles } from "@/assets/styles/Scrolls";
import { Layout } from '@/components/Layout'


function App() {
    globalStyles()
    gradientStyles()
    scrollStyles()

    return (        
      <Layout className="App" />
    )
}

export default App
