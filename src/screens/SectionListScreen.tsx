import React from 'react'
import { SectionList, View, Text } from 'react-native';
import HeaderTittle from '../components/HeaderTittle';
import { styles } from '../theme/appTheme';
import ItemSeparator from '../components/ItemSeparator';

interface Props { }

function SectionListScreen(props: Props) {
    const { } = props;

    interface Casas {
        casa: string;
        data: string[];
    }

    const casas: Casas[] = [
        {
            casa: "DC Comics",
            data: ["Batman", "Superman", "Robin", "Superman", "Robin", "Robin", "Superman", "Robin",]
        },
        {
            casa: "Marvel Comics",
            data: ["Antman", "Thor", "Spiderman", "Antman", "Thor", "Spiderman", "Antman",]
        },
        {
            casa: "Anime",
            data: ["Kenshin", "Goku", "Saitama", "Nokuko Nobjoiro", "Saitama", "Nokuko Nobjoiro"]
        }
    ];

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList
                sections={casas}
                renderItem={({ item }) => <Text style={{ fontSize: 40 }}>{item}</Text>}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={()=> <HeaderTittle title={`Section List`} />}
                stickySectionHeadersEnabled={true}
                ListFooterComponent={()=><HeaderTittle title={`total de casas: ${casas.length}`} />}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <HeaderTittle title={`${section.casa}`} />
                    </View>
                )}
                SectionSeparatorComponent={()=> <ItemSeparator/>}
                renderSectionFooter={({section})=>(
                    <HeaderTittle title={`Total: ${section.data.length}`}/>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default SectionListScreen
