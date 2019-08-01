
l = raw_input("Enter word ? ")
k=0
for i in range(0, len(l)):
    k+=1
    k= str(k)
    print l[i] + k 
    k = int(k)