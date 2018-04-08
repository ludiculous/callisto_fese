import {spring} from "react-motion";

export  const IntStyles = [
                [
                  {
                    marginLeft: spring(0, {stiffness: 120, damping: 40}),
                    opacity: spring(1, {stiffness: 120, damping: 40})
                  },
                  {
                    opacity: spring(1, {stiffness: 120, damping: 30})
                  },
                  {
                    opacity: spring(1, {stiffness: 120, damping: 30})
                  },
                  {
                    opacity: spring(1, {stiffness: 120, damping: 20}),
                    left: spring(0, {stiffness: 120, damping: 20})
                  }
                ],
                [
                  {
                    marginLeft: spring(0, {stiffness: 120, damping: 40}),
                    opacity: spring(1, {stiffness: 120, damping: 40})
                  },
                  {
                    opacity: spring(1, {stiffness: 120, damping: 30})
                  },
                  {
                    opacity: spring(1, {stiffness: 120, damping: 30})
                  },
                  {
                    opacity: spring(1, {stiffness: 120, damping: 30}),
                    left: spring(0, {stiffness: 120, damping: 30})
                  }
                ]
              ]

export  const DefaultStyles = [
                [
                  {
                    marginLeft: -500, opacity: 0
                  },
                  {
                    opacity: 0
                  },
                  {
                    opacity: 0
                  },
                  {
                    opacity: 0,
                    left: -500
                  }
                ],
                [
                  {
                    marginLeft: -1500,
                    opacity: 0
                  },
                  {
                    opacity: 0
                  },
                  {
                    opacity: 0
                  },
                  {
                    opacity: 0,
                    left: -1500
                  }
                ]
              ]

export  const Card1 = {
                category: "flagship",
                title: "Campus",
                description: "Designed to detect repeat perpetrators and to empower victims to make the reporting decision that feels right for them.",
                features: ["Secure encrypted incident records", "Option to enroll in Matching system", "Direct reporting to your institution", "Support services and local resources"],
                btnTxt: "More about Callisto Campus",
                size: 4,
                first: true
              }

export  const Card2 = {
                category: "new",
                title: "Expansion",
                description: "In this version of Callisto, we are adapting our signature matching system to empower victims beyond college campuses: ",
                features: ["Secure encrypted Matching records", "Option to create incident reports", "Access to a Callisto Options Counselor (if Matched)", "Support services and local resources"],
                btnTxt: "More about Callisto Expansion",
                size: 4
              }
