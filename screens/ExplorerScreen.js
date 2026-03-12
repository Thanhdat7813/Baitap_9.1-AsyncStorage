import React from "react";
import {
View,
Text,
TextInput,
StyleSheet,
Image,
FlatList,
Dimensions,
ScrollView
} from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function ExplorerScreen(){

const categories = [
{ id:"1", name:"Pizza", image: require("../assets/pizza.png") },
{ id:"2", name:"Burgers", image: require("../assets/burger.png") },
{ id:"3", name:"Steak", image: require("../assets/steak.png") }
];

const foods1 = [
{ id:"1", name:"Food 1", price:"1$", image: require("../assets/food1.png") },
{ id:"2", name:"Food 2", price:"3$", image: require("../assets/food2.png") },
{ id:"3", name:"Food 3", price:"5$", image: require("../assets/food3.png") }
];

const foods2 = [
{ id:"4", name:"Food 4", price:"2$", image: require("../assets/food4.png") },
{ id:"5", name:"Food 5", price:"4$", image: require("../assets/food5.png") },
{ id:"6", name:"Food 6", price:"6$", image: require("../assets/food6.png") }
];

return(

<ScrollView style={styles.container}>

{/* ===== HEADER ===== */}

<View style={styles.header}>
<Text style={styles.headerTitle}>Explore</Text>
</View>


{/* ===== SEARCH ===== */}

<TextInput
style={styles.search}
placeholder="Search for meals or area"
/>


{/* ===== TOP CATEGORIES ===== */}

<View style={styles.sectionTitle}>
<Text style={styles.title}>Top Categories</Text>
<Text style={styles.filter}>Filter</Text>
</View>

<FlatList
data={categories}
horizontal
showsHorizontalScrollIndicator={false}
keyExtractor={(item)=>item.id}
renderItem={({item})=>(
<View style={styles.categoryCard}>
<Image source={item.image} style={styles.categoryImage}/>
<Text style={styles.categoryText}>{item.name}</Text>
</View>
)}
/>


{/* ===== POPULAR ITEMS 1 ===== */}

<View style={styles.sectionTitle}>
<Text style={styles.title}>Popular Items</Text>
<Text style={styles.viewAll}>View all</Text>
</View>

<FlatList
data={foods1}
horizontal
showsHorizontalScrollIndicator={false}
keyExtractor={(item)=>item.id}
style={styles.listSpace}
renderItem={({item})=>(
<View style={styles.foodCard}>
<Image source={item.image} style={styles.foodImage}/>
<Text style={styles.foodName}>{item.name}</Text>
<Text style={styles.price}>{item.price}</Text>
</View>
)}
/>


{/* ===== POPULAR ITEMS 2 ===== */}

<View style={styles.sectionTitle}>
<Text style={styles.title}>Popular Items</Text>
<Text style={styles.viewAll}>View all</Text>
</View>

<FlatList
data={foods2}
horizontal
showsHorizontalScrollIndicator={false}
keyExtractor={(item)=>item.id}
style={styles.listSpace}
renderItem={({item})=>(
<View style={styles.foodCard}>
<Image source={item.image} style={styles.foodImage}/>
<Text style={styles.foodName}>{item.name}</Text>
<Text style={styles.price}>{item.price}</Text>
</View>
)}
/>

</ScrollView>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff",
paddingTop:30,
paddingHorizontal:16
},

/* HEADER */

header:{
alignItems:"flex-end",
marginBottom:10
},

headerTitle:{
fontSize:22,
fontWeight:"bold"
},

/* SEARCH */

search:{
borderWidth:1,
borderColor:"#ddd",
borderRadius:12,
padding:12,
marginBottom:15
},

/* SECTION TITLE */

sectionTitle:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:20
},

title:{
fontSize:18,
fontWeight:"bold"
},

filter:{
color:"#f39c12"
},

viewAll:{
color:"#f39c12"
},

/* CATEGORY */

categoryCard:{
marginRight:15,
alignItems:"center"
},

categoryImage:{
width:screenWidth/3.2,
height:90,
borderRadius:12
},

categoryText:{
marginTop:5,
fontWeight:"500"
},

/* FOOD LIST */

listSpace:{
marginBottom:25
},

foodCard:{
width:160,
marginRight:15,
borderRadius:14,
backgroundColor:"#fff",
padding:10,
elevation:4
},

foodImage:{
width:"100%",
height:100,
borderRadius:10
},

foodName:{
fontWeight:"bold",
fontSize:15,
marginTop:6
},

price:{
color:"#444",
marginTop:2
}

});