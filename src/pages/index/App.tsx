import { MainContainer } from './App.styles'
import { Text } from '@/components/Text'
import { globalStyles } from '@/stitches.conf'

function App() {
    globalStyles()

    return (
        <div className="App">
            <MainContainer>
                <Text variant={'green'} size={'max'}>
                    {'Hello'}
                </Text>
            </MainContainer>
        </div>
    )
}

export default App
