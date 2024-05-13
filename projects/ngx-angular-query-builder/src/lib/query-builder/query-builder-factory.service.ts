import { Injectable } from "@angular/core";
import { Rule, RuleSet } from "./query-builder.interfaces";

@Injectable({
  providedIn: "root"
})
export class QueryBuilderFactoryService {
  private idCounter: number = 1;
  constructor() {}

  addUniqueIds(query: RuleSet) {
    query.id = this.idCounter++;
    this.assignIds(query.rules);
    return query;
  }

  assignIds(rules: Array<RuleSet | Rule | any>) {
    rules.forEach((rule) => {
      if (!rule.id) {
        rule.id = this.idCounter++;
      }
      if (rule.rules) {
        this.assignIds(rule.rules);
      }
    });
  }

  removeRuleById(query: RuleSet, idToRemove: number): boolean {
    if (this.removeRule(query.rules, idToRemove)) {
      return true;
    } else {
      return false;
    }
  }

  removeRule(rules: Array<RuleSet | Rule | any>, idToRemove: number): boolean {
    for (let i = 0; i < rules.length; i++) {
      if (rules[i].id === idToRemove) {
        rules.splice(i, 1);
        return true;
      } else if (rules[i].rules && this.removeRule(rules[i].rules, idToRemove)) {
        return true;
      }
    }
    return false; // Rule not found
  }

  placeRuleInRuleSet(query: RuleSet, rule: Rule, ruleSetId: number, index: number = 0) {
    if (this.findRuleSet(query, rule, ruleSetId, index)) {
      return true;
    } else {
      return false;
    }
  }

  findRuleSet(query: RuleSet, rule: Rule, ruleSetId: number, index: number) {
    const { rules } = query;
    const ruleSet: RuleSet = rules.find(({ rules }: RuleSet) => !!rules);
    if (query.id === ruleSetId) {
      rules.splice(index, 0, rule);
      return true;
    } else if (ruleSet && this.findRuleSet(ruleSet, rule, ruleSetId, index)) {
      return true;
    }

    return false;
  }
}
