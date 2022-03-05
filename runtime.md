https://docs.google.com/document/d/1ufU_X-SrgRR7584iAu7aVQRWkuGFDrMQZWGqyzIpRVU/edit
https://docs.google.com/document/d/1ufU_X-SrgRR7584iAu7aVQRWkuGFDrMQZWGqyzIpRVU/edit



# runtime analysis
:|#               | tinyarray | smallarray | mediumarray | largearray | extralargearray |
                 :|---------------------------------------------------------------------|
 |doublerinsert   |    48 us  |   32.542us |  193.542us  |  8.763416ms|  770.418208ms   |
                  |_____________________________________________________________________|
 |doublerappend   |   70.25us |   73.041us |  122.791us  |   857 us   |   2.442875 ms   |
                 :|_____________________________________________________________________|


   The doublerAppend function using the .push() method is significantly faster. When talking about runtime and the scalability.
   push() method is O(1) because you're just adding an item to the end of array, for unshift () method,  you must "move" all the other existing elements forward and I suppose that is O( n) or O( log n)?

(extra credit)
   The doublerInsert function is the slower function. The reason this function is so slow is because it is using the unshift() method.  In this method it is doing the needed doubling but then it has to increment all the other elements in the array, shifting all of their index places taking far longer than the push() method, which completes the doubling and simply slides the result into the end of the array, not changing any of the array elements index positions. So the unshift() is causing far longer runtimes.
              