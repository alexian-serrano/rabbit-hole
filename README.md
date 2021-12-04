# Rabbit hole

There's N rabbit holes (from 0 to N-1) and 1 rabbit.   
The rabbit is hiding in one of those holes.   
The goal is to find in which hole the rabbit is.   

### Rules
- We can try only one hole at the time.   
- Each time we miss the rabbit, its moving to one of the adjacent hole. For example, if the rabbit is in the hole M and we miss it, then the rabbit can go in the hole M-1 or M+1.
- If the rabbit is in the hole 0, then if we miss, it can only go to the hole 1.
- If the rabbit is in the hole N-1, then if we miss, it can only go to the hole N-2.