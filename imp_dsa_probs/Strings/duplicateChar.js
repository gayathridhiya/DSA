s="geek";
m={};
for(let i of s){
    if(m[i]) m[i]+=1; else m[i]=1; }

for(let i in m){
    if(m[i] > 1)  console.log(i)
}