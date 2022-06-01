"""
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course ai first if you want to take course bi.

For example, the pair [0, 1] indicates that you have to take course 0 before you can take course 1.
Prerequisites can also be indirect. If course a is a prerequisite of course b, and course b is a prerequisite of course c, then course a is a prerequisite of course c.

You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should answer whether course uj is a prerequisite of course vj or not.

Return a boolean array answer, where answer[j] is the answer to the jth query.
"""


class Solution(object):
    def checkIfPrerequisite(self, numCourses, prerequisites, queries):
        a=[i for i in range(numCourses)]
        pm = { i: a}
        
        for c, p in prerequisites:
            pm[c].append(p)
            
        vset = set()
        
        def dfs(c):
            if c in vset:
                return False
            if pm[c] == []:
                return True
            
            vset.add(c)
            for p in pm[c]:
                if not dfs(p):
                    return False
                vset.remove(c)
                pm[c]=[]
                return True
            
            for c in range(numCourses):
                if not dfs(c):
                    return False
                return True
            
