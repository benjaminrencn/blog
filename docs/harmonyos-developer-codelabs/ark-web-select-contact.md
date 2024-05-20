# ArkTS与H5的交互

---

<Badge type="tip" text="鸿蒙" />
<Badge type="tip" text="WebView" />
<Badge type="tip" text="JSBridge 桥接" />

* [📎 Web-ArkTS与H5的交互（ArkTS）](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/tutorials_NEXT-SelectContact)

## 💔预览问题

### 预览报错 Preview not available for this component

PreviewerLog

```
A preview error may have occurred. Switch to the Log tab to view details.
Cannot preview in this file. There are properties not initialized. For details about the properties, see (entry/src/main/ets/pages/SelectContact.ets:39:25). For more information about the solution, see FAQs.
```

Log > HiLog

```
03-20 16:08:59.426   7015...72203 C03f00/ArkCompiler    E     [ArkRuntime Log] TypeError: Cannot read property densityDPI of undefined
03-20 16:08:59.427   7015...72203 C03900/Ace            E     [Engine Log]Lifetime: 0.000000s
03-20 16:08:59.427   7015...72203 C03900/Ace            E     [Engine Log]Js-Engine: ark
03-20 16:08:59.427   7015...72203 C03900/Ace            E     [Engine Log]page: pages/SelectContact.js
03-20 16:08:59.427   7015...72203 C03900/Ace            E     [Engine Log]Error message: Cannot read property densityDPI of undefined
03-20 16:08:59.427   7015...72203 C03900/Ace            E     [Engine Log]SourceCode:
03-20 16:08:59.427   7015...72203 C03900/Ace            E     [Engine Log]            this.proportion = displayClass[0].densityDPI / CommonConstants.COMMON_VALUE;
03-20 16:08:59.427   7015...72203 C03900/Ace            E     [Engine Log]                              ^
03-20 16:08:59.427   7015...72203 C03900/Ace            E     [Engine Log]Stacktrace:
03-20 16:08:59.427   7015...72203 C03900/Ace            E     [Engine Log]    at anonymous (entry/src/main/ets/pages/SelectContact.ets:39:25)
```

修改代码 entry/src/main/ets/pages/SelectContact.ets  
不报错但是预览器显示 Preview not available for this component 💣可能需要模拟器或真机调试

```ts
this.proportion = displayClass[0].densityDPI / CommonConstants.COMMON_VALUE; // [!code --]
this.proportion = displayClass[0]?.densityDPI / CommonConstants.COMMON_VALUE; // [!code ++]
```