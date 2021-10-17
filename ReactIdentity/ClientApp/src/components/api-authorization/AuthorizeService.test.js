const AuthorizeService = require("./AuthorizeService")
// @ponicode
describe("isAuthenticated", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", async () => {
        await inst.isAuthenticated()
    })
})

// @ponicode
describe("getUser", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", async () => {
        await inst.getUser()
    })
})

// @ponicode
describe("getAccessToken", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", async () => {
        await inst.getAccessToken()
    })
})

// @ponicode
describe("signIn", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", async () => {
        await inst.signIn("Alabama")
    })

    test("1", async () => {
        await inst.signIn({})
    })

    test("2", async () => {
        await inst.signIn(undefined)
    })
})

// @ponicode
describe("completeSignIn", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", async () => {
        await inst.completeSignIn("www.google.com")
    })

    test("1", async () => {
        await inst.completeSignIn("https://twitter.com/path?abc")
    })

    test("2", async () => {
        await inst.completeSignIn("https://")
    })

    test("3", async () => {
        await inst.completeSignIn("Www.GooGle.com")
    })

    test("4", async () => {
        await inst.completeSignIn("http://www.example.com/route/123?foo=bar")
    })

    test("5", async () => {
        await inst.completeSignIn(undefined)
    })
})

// @ponicode
describe("signOut", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", async () => {
        await inst.signOut({ key: "elio@example.com" })
    })

    test("1", async () => {
        await inst.signOut({ key: "Elio" })
    })

    test("2", async () => {
        await inst.signOut({ key: "Dillenberg" })
    })

    test("3", async () => {
        await inst.signOut(undefined)
    })
})

// @ponicode
describe("completeSignOut", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", async () => {
        await inst.completeSignOut("https://croplands.org/app/a/reset?token=")
    })

    test("1", async () => {
        await inst.completeSignOut("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
    })

    test("2", async () => {
        await inst.completeSignOut("https://croplands.org/app/a/confirm?t=")
    })

    test("3", async () => {
        await inst.completeSignOut("https://api.telegram.org/")
    })

    test("4", async () => {
        await inst.completeSignOut("http://base.com")
    })

    test("5", async () => {
        await inst.completeSignOut(undefined)
    })
})

// @ponicode
describe("updateState", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", () => {
        let callFunction = () => {
            inst.updateState(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.updateState("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.updateState(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.updateState("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.updateState(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.updateState(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("subscribe", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", () => {
        let callFunction = () => {
            inst.subscribe(() => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.subscribe(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("unsubscribe", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", () => {
        let callFunction = () => {
            inst.unsubscribe("a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.unsubscribe("7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.unsubscribe("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.unsubscribe(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("notifySubscribers", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", () => {
        let callFunction = () => {
            inst.notifySubscribers()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createArguments", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", () => {
        let callFunction = () => {
            inst.createArguments("Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.createArguments("Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.createArguments("Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.createArguments("Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.createArguments(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("error", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", () => {
        let callFunction = () => {
            inst.error("The line-by-line profiler can only be used in dev.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.error("cannot be found.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.error("Unable to allocate address")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.error("Unknown Error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.error("Exception not raised: %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.error(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("success", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", () => {
        let callFunction = () => {
            inst.success("Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.success("Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.success("Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.success("Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.success(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("redirect", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", () => {
        let callFunction = () => {
            inst.redirect()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("ensureUserManagerInitialized", () => {
    let inst

    beforeEach(() => {
        inst = new AuthorizeService.AuthorizeService()
    })

    test("0", async () => {
        await inst.ensureUserManagerInitialized()
    })
})
