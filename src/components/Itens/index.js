import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';

import { styles } from "./style";

export default function Itens({ data }){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.6} >
            <Image
                style={styles.imag}
                source={{ uri: data.profile }}
            />

            <View style={styles.texs} >
               <Text style={styles.title} > {data.username} </Text>
               <Text style={styles.subtitle} > R$ {data.valor} /kg </Text>
               <Text numberOfLines={3} style={styles.subdtitle} > {data.stats} </Text>
            </View>
            
            <View style={styles.texs2} >
                {data.promotion == 'true' ?
                    <View style={styles.promo} >
                        <Text style={styles.textPromo} > Oferta </Text>
                    </View>
                    :
                    <></>
                }
            </View>

        </TouchableOpacity>
    )
}